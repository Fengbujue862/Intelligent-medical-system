<template>
  <div class="flex flex-col h-screen">
    <div
        class="flex flex-nowrap fixed w-full items-baseline top-0 px-6 py-4 bg-gray-100 bg-header-back"
    >
      <div class="text-white text-2xl font-bold ">智能医疗问诊</div>
      <div class="ml-4 text-sm text-gray-500">
        基于 OpenAI 的 ChatGPT
      </div>
      <div
          class="ml-auto px-3 py-2 text-sm cursor-pointer hover:bg-white rounded-md"
          @click="clickConfig()"
      >
        设置
      </div>
    </div>

    <div class="flex-1 mx-8 mt-20 mb-2" ref="chatListDom">
      <div
          v-for="item of messageList.filter((v) => v.role !== 'system')"
          class="group flex flex-col px-4 py-3 hover:bg-slate-100 rounded-lg even:text-right"
      >
        <div class="inline-flex justify-between items-center mb-2">  <!--名称-->
          <div class="flex-1 ont-bold">{{ roleAlias[item.role] }}：</div>
          <Copy class="flex-2 invisible group-hover:visible" :content="item.content" />
        </div>
        <div>                                                 <!--内容-->
          <pre
              class="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed"
              v-if="item.content"
          >{{ item.content.replace(/^\n\n/, "") }}
          </pre>
          <Loding v-else />
        </div>
      </div>
    </div>

    <div class="sticky bottom-0 w-full p-6 pb-8 bg-gray-100">
      <div class="-mt-2 mb-2 text-sm text-gray-500" v-if="isConfig">
        请输入 API Key：
      </div>
      <div class="flex">
        <input
            class="input"
            :type="isConfig ? 'password' : 'text'"
            :placeholder="isConfig ? 'sk-xxxxxxxxxx' : '请输入'"
            v-model="messageContent"
            @keydown.enter="isTalking || sendOrSave()"
        />
        <button class="btn" :disabled="isTalking" @click="sendOrSave()">
          {{ isConfig ? "保存" : "发送" }}
        </button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { ChatMessage } from "@/types";
import { ref, watch, nextTick, onMounted } from "vue";
import { chat } from "@/libs/gpt";
import cryptoJS from "crypto-js";
import Loding from "@/components/Loding.vue";
import Copy from "@/components/Copy.vue";
import left from "@icon-park/vue-next/lib/icons/Left";
import margin from "@icon-park/vue-next/lib/icons/Margin";

let apiKey = "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";
let isConfig = ref(true);
let isTalking = ref(false);
let messageContent = ref("");
const chatListDom = ref<HTMLDivElement>();
const decoder = new TextDecoder("utf-8");
const roleAlias = { user: "ME", assistant: "医疗助手", system: "System" };
const messageList = ref<ChatMessage[]>([
  {
    role: "system",
    content: "你是一个医疗助手",
  },
  {
    role: "assistant",
    content: `你好，我是医疗助手`,
  },
]);

onMounted(() => {
  if (getAPIKey()) {
    switchConfigStatus();
  }
});

const sendChatMessage = async (content: string = messageContent.value) => {
  try {
    isTalking.value = true;
    if (messageList.value.length === 2) {
      //messageList.value.pop();
    }
    messageList.value.push({ role: "user", content });
    clearMessageContent();
    messageList.value.push({ role: "assistant", content: "" });

    const { body, status } = await chat(messageList.value, getAPIKey());
    if (body) {
      const reader = body.getReader();
      await readStream(reader, status);
    }
  } catch (error: any) {
    appendLastMessageContent(error);
  } finally {
    isTalking.value = false;
  }
};

const readStream = async (
  reader: ReadableStreamDefaultReader<Uint8Array>,
  status: number
) => {
  const regex = /({.*?]})/g;
  const { done, value } = await reader.read();
  if (done) {
    reader.closed;
    return;
  }
  const decodeText = decoder.decode(value);
  const dataList = status === 200 ? decodeText.match(regex) : [decodeText];
  dataList?.forEach((v: any) => {
    const json = JSON.parse(v);
    console.log(json);
    const content =
      status === 200 ? json.choices[0].delta.content ?? "" : json.error.message;
    appendLastMessageContent(content);
  });
  await readStream(reader, status);
};

const appendLastMessageContent = (content: string) =>
  (messageList.value[messageList.value.length - 1].content += content);

const sendOrSave = () => {
  if (!messageContent.value.length) return;
  if (isConfig.value) {
    if (saveAPIKey(messageContent.value.trim())) {
      switchConfigStatus();
    }
    clearMessageContent();
  } else {
    sendChatMessage();
  }
};

const clickConfig = () => {
  if (!isConfig.value) {
    messageContent.value = getAPIKey();
  } else {
    clearMessageContent();
  }
  switchConfigStatus();
};

const getSecretKey = () => "lianginx";

const saveAPIKey = (apiKey: string) => {
  if (apiKey.slice(0, 3) !== "sk-" || apiKey.length !== 51) {
    alert("API Key 错误，请检查后重新输入！");
    return false;
  }
  const aesAPIKey = cryptoJS.AES.encrypt(apiKey, getSecretKey()).toString();
  localStorage.setItem("apiKey", aesAPIKey);
  return true;
};

const getAPIKey = () => {
  if (apiKey) return apiKey;
  const aesAPIKey = localStorage.getItem("apiKey") ?? "";
  apiKey = cryptoJS.AES.decrypt(aesAPIKey, getSecretKey()).toString(
    cryptoJS.enc.Utf8
  );
  return apiKey;
};

const switchConfigStatus = () => (isConfig.value = !isConfig.value);

const clearMessageContent = () => (messageContent.value = "");

const scrollToBottom = () => {
  if (!chatListDom.value) return;
  scrollTo(0, chatListDom.value.scrollHeight);
};

watch(messageList.value, () => nextTick(() => scrollToBottom()));
</script>



<style scoped>
pre {
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica,
    "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
    "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN",
    "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti",
    SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
.user{
  margin-left: 80%;
}
</style>
