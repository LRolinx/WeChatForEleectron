<template>
  <div id="SearchBar">
    <div class="header">
      <div class="drawable" style="-webkit-app-region: drag"></div>
      <div class="searchBox">
        <div class="inputBox">
          <svg
            t="1592119742718"
            class="icon"
            viewBox="0 0 1045 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="30804"
            width="10"
            height="10"
          >
            <path
              d="M1033.680074 979.2692l-44.794068 44.7308-252.061539-252.061538C658.498116 841.913377 556.193018 885.758418 442.879209 885.758418a442.879209 442.879209 0 1 1 442.879209-442.879209c0 108.378869-40.491813 206.381711-105.152178 283.379426l253.073834 253.010565zM817.618289 442.879209A374.739079 374.739079 0 1 0 68.14013 442.879209a374.739079 374.739079 0 0 0 749.478159 0z"
              fill="#8d8d8e"
              p-id="30805"
            />
          </svg>
          <input type="text" placeholder="搜索" />
        </div>
        <div class="addFriend">
          <i class="el-icon-plus"></i>
        </div>
      </div>
    </div>
    <!-- 动态视图 -->
    <div v-bind:is="changeComponent" @click="openChatView"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";

import ChatList from "../Home/ChatList.vue"

@Component({
   components: {
      ChatList
   }
})
export default class SearchBar extends Vue {
   private changeComponent: string | undefined = "ChatList";

   @Emit("click")
   private openChatView(): void {
    //  
   }

}
</script>

<style lang="scss" scoped>
#SearchBar {
  border-right: 1px solid #f3f3f3;
  user-select: none;

  .header {
    background: #fbfbfb;
  }

  .searchBox {
    padding-bottom: 18px;
    margin: 0 11px;
    display: flex;
    justify-content: space-between;
  }

  .searchBox .inputBox {
    input {
      background: #e5e5e6;
      border: 1px solid #fdfcf9;
      padding: 3.5px 25px;
      font-size: 13px;
      border-radius: 4px;
      vertical-align: middle;
      vertical-align: top;
      vertical-align: bottom;

      &::placeholder {
        color: #c6c6c6;
      }
    }

    .inputBox {
      position: relative;
    }

    svg {
      position: absolute;
      left: 20px;
      top: 25px;
    }
  }

  .addFriend {
    vertical-align: middle;
    vertical-align: top;
    vertical-align: bottom;
    font-size: 13px;
    padding: 0px 7px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    height: 22px;
    line-height: 22px;
  }
}

.drawable {
  // border-bottom: 1px solid #900;
  height: 18px;
}
</style>