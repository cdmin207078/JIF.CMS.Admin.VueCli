<template>
<div>
  <div class="row">
    <div class="col-md-12">
      <div class="card card-border">
        <div class="card-header card-header-divider">
          <span class="title">所有文章</span></div>
        <div class="card-body">

          <div class="form-group row justify-content-between p-4">
            <div class="mb-2 mb-sm-0">
              <button class="btn btn-space btn-primary hover btn-lg">
              <i class="icon icon-left mdi mdi-plus"></i>
              新增
            </button>
            </div>
            <div class="float-right">
              <input class="form-control form-control-sm" type="text" placeholder="搜索: 标题">
            </div>
          </div>

          <table class="table table-sm table-hover table-striped">
            <thead>
              <tr>
                <th style="width:4%;">
                  <label class="custom-control custom-control-sm custom-checkbox">
                    <input class="custom-control-input" type="checkbox"><span class="custom-control-label"></span>
                  </label>
                </th>
                <th>标题</th>
                <th>所属分类</th>
                <th>创建时间 / 最后更新</th>
                <th>浏览 / 回复</th>
                <th class="actions" style="width: 120px;">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in 20" :key="n">
                <td>
                  <label class="custom-control custom-control-sm custom-checkbox">
                    <input class="custom-control-input" type="checkbox"><span class="custom-control-label"></span>
                  </label>
                </td>
                <td>[io-{{ n }}] - ABP 使用札记</td>
                <td>学习札记</td>
                <td>2017-07-01 / 2018-01-01</td>
                <td>1103 / 2</td>
                <td>
                  <div class="btn-group btn-space">
                    <button class="btn btn-secondary" type="button" title="编辑"><i class="icon icon-left mdi mdi-edit"></i></button>
                    <button class="btn btn-secondary" type="button" title="置顶"><i class="icon icon-left mdi mdi-thumb-up"></i></button>
                    <button class="btn btn-secondary" type="button" title=""><i class="icon icon-left mdi" :class="{ 'mdi-eye-off': n%2==0, 'mdi-eye': n%2==1}"></i></button>
                    <!-- <button class="btn btn-secondary" type="button" title="删除"><i class="icon icon-left mdi mdi-delete"></i></button> -->
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  mounted: () => {
    console.log($)
  }
}
</script>
