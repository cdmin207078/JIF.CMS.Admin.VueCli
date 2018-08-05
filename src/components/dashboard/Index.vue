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
            <label >分类</label>
            <select class="select2">
              <option value="AZ">Arizona</option>
              <option value="CO">Colorado</option>
              <option value="ID">Idaho</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NM">New Mexico</option>
              <option value="ND">North Dakota</option>
              <option value="UT">Utah</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div class="form-group">
            <label>标签</label>
            <select class="select2">
              <option value="AZ">Arizona</option>
              <option value="CO">Colorado</option>
              <option value="ID">Idaho</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NM">New Mexico</option>
              <option value="ND">North Dakota</option>
              <option value="UT">Utah</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div class="row pt-3">
            <div class="col-lg-6 pb-4 pb-lg-0">
              <label class="be-checkbox custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox"><span class="custom-control-label">Remember me</span>
              </label>
            </div>
            <div class="col-sm-6">
              <p class="text-right">
                <button class="btn btn-space btn-primary" type="submit">Submit</button>
                <button class="btn btn-space btn-secondary">Cancel</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Select2Full from '../../assets/select2/select2.full.min.js'

export default {
  name: 'DashBoardIndex',
  components: {
    Select2Full
  },
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.initSelect2()
    this.loadArticles()
  },
  methods: {
    initSelect2: function () {
      $('.select2').select2({'width': '100%', 'placeholder': 'Select a state'})
    },
    initCategories: function () {

    },
    initTags: function () {

    },
    loadArticles: function () {

    }
  }
}
</script>
