<template>
<div>
  <div class="row">
    <div class="col-md-9">
      <div class="card card-border">
        <div class="card-header card-header-divider">
          <span class="title">编辑文章</span></div>
        <div class="card-body">

          <form>
            <div class="form-group pt-2">
              <input class="form-control" id="inputTitle" type="email" placeholder="标题">
            </div>
            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input class="form-control" id="inputPassword" type="password" placeholder="Password">
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
          </form>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card card-border">
        <div class="card-header card-header-divider">
          <span class="title">编辑文章</span></div>
        <div class="card-body">

          <form>
            <div class="form-group">
              <label for="inputTitle">分类</label>
              <input class="form-control" id="inputTitle" type="email" placeholder="标题">
            </div>

            <div class="form-group">
              <label for="inputPassword">标签</label>
              <input class="form-control" id="inputPassword" type="password" placeholder="Password">
            </div>

            <div class="form-group">
              <label for="inputPassword">标签</label>
              <input class="form-control" id="inputPassword" type="password" placeholder="Password">
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
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DashBoardIndex',
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.loadArticles()
  },
  methods: {
    loadArticles: function () {
      console.log('loadArticles')
    }
  }
}
</script>
