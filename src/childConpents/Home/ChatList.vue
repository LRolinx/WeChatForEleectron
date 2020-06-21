<template>
  <div id="ChatList">
    <ul>
      <li
        v-for="(item, index) in dataList"
        :key="index"
        @click="chatTo(index)"
        :class="{SELECT: CHAT_OBJECT_ID == ( index + 1 )}"
      >
        <div class="chat-item">
          <div class="itembox">
            <div class="avatar" style="height: 45px;">
              <el-avatar :size="45" fit="cover" shape="square" :src="item.avatar"></el-avatar>
            </div>
            <div class="info">
              <div class="chat-object">
                <div class="object-name">{{ item.name }}</div>
                <div class="chat-time">{{ item.time }}</div>
              </div>
              <div class="chat-content">
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import ArrayList from "../../interface/ArrayListType";
import { CHAT_LIST_DATA } from "../../dataStore/index";
import ChangeViewResult from "../../interface/ChangeViewResult";

@Component
export default class ChatList extends Vue {
  private profilePhoto: string | undefined = require("../../assets/mayun.png");
  private CHAT_OBJECT_ID: number | undefined = 0;
  private dataList: ArrayList = CHAT_LIST_DATA;

  private willBeChangeViewResult: ChangeViewResult = { COMPONENT: "", ID: 0 };

  // 向父组件返回信息,告知父组件切换组件。
  @Emit("click")
  public chatTo(ID: number): ChangeViewResult {
    this.CHAT_OBJECT_ID = ID + 1; // 当前聊天对象
    this.willBeChangeViewResult.COMPONENT = "ChatView"; // 通知父组件切换组件的消息容器
    this.willBeChangeViewResult.ID = this.CHAT_OBJECT_ID; // 告知父组件聊天对象
    return this.willBeChangeViewResult;
  }
}
</script>
<style lang="scss" scoped>
#ChatList {
  user-select: none;
  max-height: 100%;
  background: rgb(251, 251, 251);
  overflow: hidden;

  .SELECT {
    background: #d6d6d6;
  }
  .chat-item {
    padding: 10px;
  }
  .chat-item .itembox {
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      content: "";
      width: calc(100% + 10px);
      margin: auto;
      bottom: -10px;
      height: 1px;
      position: absolute;
      background: #f3f3f3;
      left: 0;
    }

    .info {
      width: 100%;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .info .chat-object {
      display: flex;
      margin-bottom: 6px;
      justify-content: space-between;
    }

    .info .object-name {
      font-size: 14px;
      // font-weight: 500;
      font-family: "Arial";
    }

    .info .chat-time {
      font-size: 12px;
      color: #888888;
      font: inherit inherit inherit inherit inherit inherit inherit inherit;
    }

    .info .chat-content {
      font-size: 12px;
      color: #888888;
      vertical-align: middle;
      vertical-align: top;
      vertical-align: bottom;
    }
  }
}
</style>