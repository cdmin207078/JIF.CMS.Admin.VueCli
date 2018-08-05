<template>
<div>
  <div class="be-left-sidebar">
    <div class="left-sidebar-wrapper"><a class="left-sidebar-toggle" href="javascript:;">Blank Page</a>
      <div class="left-sidebar-spacer">
        <div class="left-sidebar-scroll">
          <div class="left-sidebar-content">
            <ul class="sidebar-elements">
              <li class="divider">Menu</li>

              <li class="active"><router-link to="/"><i class="icon mdi mdi-home"></i><span>仪表盘</span></router-link></li>

              <li>
                <router-link to="/article"><i class="icon mdi mdi-book"></i><span>文章管理</span></router-link>
              </li>

              <li class="parent"><a href="javascript:;" @click="openMenu"><i class="icon mdi mdi-face"></i><span>UI Elements</span></a>
                <ul class="sub-menu">
                  <li><a href="ui-alerts.html">Alerts</a>
                  </li>
                  <li class="active"><a href="ui-buttons.html">Buttons</a>
                  </li>
                  <li><a href="ui-cards.html"><span class="badge badge-primary float-right">New</span>Cards</a>
                  </li>
                  <li><a href="ui-panels.html">Panels</a>
                  </li>
                  <li><a href="ui-general.html">General</a>
                  </li>
                  <li><a href="ui-modals.html">Modals</a>
                  </li>
                  <li><a href="ui-notifications.html">Notifications</a>
                  </li>
                  <li><a href="ui-icons.html">Icons</a>
                  </li>
                  <li><a href="ui-grid.html">Grid</a>
                  </li>
                  <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
                  </li>
                  <li><a href="ui-nestable-lists.html">Nestable Lists</a>
                  </li>
                  <li><a href="ui-typography.html">Typography</a>
                  </li>
                </ul>
              </li>
              <li class="parent" id="menuAA"><a href="javascript:;" @click="openMenu"><i class="icon mdi mdi-chart-donut"></i><span>Charts</span></a>
                <ul class="sub-menu">
                  <li><a href="charts-flot.html">Flot</a>
                  </li>
                  <li><a href="charts-sparkline.html">Sparklines</a>
                  </li>
                  <li><a href="charts-chartjs.html">Chart.js</a>
                  </li>
                  <li><a href="charts-morris.html">Morris.js</a>
                  </li>
                </ul>
              </li>

              <li class="divider">循环渲染</li>

              <li v-for="menu in menus" :key="menu.link">
                <template v-if="!menu.subs">
                  <router-link :to="menu.link"><i :class="menu.icon"></i><span>{{menu.text}}</span></router-link>
                </template>
                <template v-if="menu.subs">
                  <ul class="sub-menu">
                    <li v-for="sub in menu.subs" :key="sub.link">
                      <router-link :to="sub.link">{{sub.text}}</router-link>
                    </li>
                    <li><a href="charts-flot.html">Flot</a></li>
                    <li><a href="charts-sparkline.html">Sparklines</a></li>
                    <li><a href="charts-chartjs.html">Chart.js</a></li>
                    <li><a href="charts-morris.html">Morris.js</a></li>
                </ul>
                </template>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SilderBar',
  data () {
    return {
      name: '你好',
      menus: [{
        link: '#1',
        text: '仪表盘',
        icon: 'icon mdi mdi-home'
      },
      {
        link: '#2',
        text: '百度',
        icon: 'icon mdi mdi-home'
      },
      {
        link: '#3',
        text: 'UI Elements',
        icon: 'icon mdi mdi-home',
        subs: [{
          link: '#3-1',
          text: '仪表盘 - 1'
        },
        {
          link: '#3-2',
          text: '仪表盘 - 2'
        },
        {
          link: '#3-3',
          text: '仪表盘 - 3'
        },
        {
          link: '#3-4',
          text: '仪表盘 - 4'
        }]
      }]
    }
  },
  mounted () {
    // console.log(this.name)
  },
  methods: {
    openMenu: function (event) {
      // 设置当前点击菜单状态
      let currentMenu
      if (event.target.tagName === 'A') {
        currentMenu = event.target.parentNode
      } else if (event.target.tagName === 'SPAN') {
        currentMenu = event.target.parentNode.parentNode
      }

      let originStatus = this.hasClass(currentMenu, 'open')

      // 删除其它二级菜单, 打开状态
      let menus = document.getElementsByClassName('parent')
      for (let index = 0; index < menus.length; index++) {
        const element = menus[index]
        element.classList.remove('open')
      }

      // 若之前是关闭的, 则打开菜单
      if (!originStatus) {
        currentMenu.classList.add('open')
      }
    },
    hasClass: function (element, cls) {
      let className = ' ' + cls + ' '
      let rclass = /[\t\n\r\f]/g
      if (element.nodeType === 1 && (' ' + element.className + ' ').replace(rclass, ' ').indexOf(className) >= 0) {
        return true
      }
      return false
    }
  }
}
</script>
