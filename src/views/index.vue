<template>
<section>
    <section class="mui-content">
      <div class="mui-input-group mui-table-view">
          <div class="mui-input-row mui-table-view-cell mui-collapse">
              <label>选择组件</label>
              <input type="text" class="mui-input-clear" v-model="uiText" @click="selUi" placeholder="选择组件" readonly>
              <span class="mui-navigate-right"></span>
          </div>
      </div>
      <div style="padding: 10px 0;">
        <input v-colorSwatch="{bgColor: 'green'}">
        <button type="button" class="mui-btn mui-btn-primary" @click="test">点击</button>
      </div>
      <div>
        <img src="../assets/img/temp/1.jpg">
      </div>
    </section>
</section>
</template>

<script>
import "@/assets/css/mui.picker.min.css";
import "@/assets/libs/mui.picker.min.js";

export default {
  name: "index",
  data() {
    return {
      uiText: '',
      uiValue: '',
    };
  },
  created() {
    //
  },
  methods: {
    selUi() {
      var self = this;
      var picker = new mui.PopPicker({
        layer: 1
      });
      picker.setData([
        { value: '111', text: '单选框' },
        { value: '222', text: '多选框' }
      ]);
      picker.pickers[0].setSelectedIndex(0);
      picker.show(function(SelectedItem) {
        if(SelectedItem[0].value) {
          self.uiText = SelectedItem[0].text;
          self.uiValue = SelectedItem[0].value;
        }
      });
    },
    test() {
      utils.testFn();
    }
  }
};
</script>

<style scoped>
.mui-table-view-cell {
  padding: 0;
}
input,
select {
  font-size: 14px;
}
</style>
