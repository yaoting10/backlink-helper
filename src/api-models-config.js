// Backlink Helper API/model configuration.
//
// Edit this file when you want to hard-code the default model provider used by
// the extension. The settings page and popup read window.API_MODELS_CONFIG before
// falling back to their bundled defaults.
//
// To hard-code your own model:
// 1. Set defaultSettings.provider to one of the keys in providers.
// 2. Set defaultSettings.model to a model name available from that provider.
// 3. For a custom OpenAI-compatible endpoint, use provider: "custom" and set
//    defaultSettings.customBaseUrl.
// 4. Put an API key in defaultSettings.apiKey only for personal/local use.
// 5. Set forceDefaultSettings to true if you want this file to override any
//    API settings already saved in chrome.storage.local.

window.API_MODELS_CONFIG = {
  forceDefaultSettings: false,

  defaultSettings: {
    provider: "custom",
    apiKey: "sk-01f446a37831501d0bd1e520c188a2368101ed7a6dd6147e406729251730ad90",
    customBaseUrl: "https://modelboxs.com/v1",
    model: "gpt-5.5",
    customModels: []
  },

  providers: {
    modelboxs: {
      name: "modelboxs",
      baseUrl: "https://modelboxs.com/v1",
      getKeyUrl: "",
      models: ["gpt-5.5"]
    },
    siliconflow: {
      name: "硅基流动",
      baseUrl: "https://api.siliconflow.cn/v1",
      getKeyUrl: "https://cloud.siliconflow.cn/account/ak",
      models: ["Qwen/Qwen2.5-72B-Instruct"]
    },
    openai: {
      name: "OpenAI",
      baseUrl: "https://api.openai.com/v1",
      getKeyUrl: "https://platform.openai.com/api-keys",
      models: ["Qwen/Qwen2.5-72B-Instruct"]
    },
    deepseek: {
      name: "DeepSeek",
      baseUrl: "https://api.deepseek.com",
      getKeyUrl: "https://platform.deepseek.com/api_keys",
      models: [
        "deepseek-v4-flash",
        "deepseek-v4-pro",
        "deepseek-chat",
        "deepseek-reasoner"
      ]
    },
    zhipu: {
      name: "智谱AI",
      baseUrl: "https://open.bigmodel.cn/api/paas/v4",
      getKeyUrl: "https://bigmodel.cn/usercenter/proj-mgmt/apikeys",
      models: ["glm-5.1", "glm-4.7", "glm-4.6"]
    },
    zhipuCoding: {
      name: "智谱 Coding Plan",
      baseUrl: "https://open.bigmodel.cn/api/coding/paas/v4",
      getKeyUrl: "https://bigmodel.cn/usercenter/proj-mgmt/apikeys",
      models: ["GLM-5.1", "GLM-4.7", "GLM-4.5-Air"]
    },
    gemini: {
      name: "Google Gemini",
      baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
      getKeyUrl: "https://aistudio.google.com/api-keys",
      models: ["Qwen/Qwen2.5-72B-Instruct"]
    },
    openrouter: {
      name: "OpenRouter",
      baseUrl: "https://openrouter.ai/api/v1",
      getKeyUrl: "https://openrouter.ai/keys",
      models: ["Qwen/Qwen2.5-72B-Instruct"]
    },
    custom: {
      name: "自定义",
      baseUrl: "",
      getKeyUrl: "",
      models: []
    }
  }
};
