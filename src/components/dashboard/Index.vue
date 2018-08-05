<template>
<div>
  <div class="row">
    <div class="col-md-8">
      <div class="card card-border">
        <div class="card-header card-header-divider">
          <span class="title">编辑文章</span>
        </div>
        <div class="card-body">
          <div class="form-group pt-2">
            <input class="form-control" type="text" placeholder="标题">
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="15" placeholder="文若流沙 思若泉涌"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card card-border">
        <div class="card-header card-header-divider">
          <span class="title">编辑文章</span>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label>分类</label>
            <select class="select2" v-model="selectCategory">
              <option v-for="op in categories" :value="op.val" :key="op.val">{{ op.txt }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>标签</label>
            <select class="select2" multiple="" v-model="selectTags">
              <option v-for="op in tags" :value="op.val" :key="op.val">{{ op.txt }}</option>
            </select>
          </div>

          <div class="row">
            <div class="col-lg-6 pb-4 pb-lg-0">
              <label class="be-checkbox custom-control custom-checkbox custom-control-inline">
                <input class="custom-control-input" type="checkbox">
                <span class="custom-control-label">前台显示</span>
              </label>
            </div>
            <div class="col-sm-6">
            </div>
          </div>

          <div class="form-group pt-3">
            <button class="btn btn-space btn-primary">发布</button>
            <button class="btn btn-space btn-secondary">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Select2Full from '../../assets/select2/select2.full.min.js'
import SummerNote from '../../assets/summernote/summernote-bs4.min.js'
import SummerNoteBeagle from '../../assets/summernote/summernote-ext-beagle'

export default {
  name: 'DashBoardIndex',
  components: {
    Select2Full,
    SummerNote,
    SummerNoteBeagle
  },
  data () {
    return {
      categories: [],
      tags: [],
      selectCategory: '',
      selectTags: []
    }
  },
  mounted () {
    this.initSelect2()
    this.initCategories()
    this.initTags()
    this.loadArticles()
  },
  methods: {
    initSelect2: function () {
      $('.select2').select2({'width': '100%'})
      $('.tags').select2({'tags': 0, 'width': '100%'})
    },
    initCategories: function () {
      let data = []
      data.push({val: 1, txt: '技术札记'})
      data.push({val: 2, txt: '读书笔记'})
      data.push({val: 3, txt: '音乐学习'})
      data.push({val: 4, txt: '生活琐拾'})

      this.categories = data
    },
    initTags: function () {
      let data = []
      data.push({val: 1, txt: '.net'})
      data.push({val: 2, txt: 'java'})
      data.push({val: 3, txt: 'git'})
      data.push({val: 4, txt: '钢琴'})
      data.push({val: 5, txt: '吉他'})
      data.push({val: 6, txt: 'linux'})
      data.push({val: 7, txt: '算法'})
      data.push({val: 8, txt: '计算机原理'})
      data.push({val: 9, txt: '个人创作'})

      this.tags = data
    },
    loadArticles: function () {
    }
  }
}
</script>
<style>
  @import "../../assets/summernote/summernote-bs4.css";
</style>
