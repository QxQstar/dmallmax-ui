<template>
  <div class="menu-wrapper">
    <template v-if="!item.list || item.list.length < 1">
      <app-link :to="resolvePath(item.path,item.belong)">
        <el-menu-item
          :class="{'submenu-title-noDropdown':!isNest}"
          :index="uniqIndex"
          :data-uniq-index="uniqIndex"
        >
          <item
            :icon="item.meta&&item.meta.icon"
            :title="item.name"
          />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="uniqIndex"
      :data-uniq-index="uniqIndex"
      popper-append-to-body
    >
      <template slot="title">
        <item
          :icon="item.meta && item.meta.icon"
          :title="item.name"
        />
      </template>
      <sidebar-item
        v-for="(child,i) in item.list"
        :key="i"
        :is-nest="true"
        :item="child"
        :uniq-index="uniqIndex + '-' + i"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import Item from './Item'
import AppLink from './Link'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    // menu object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    uniqIndex:{
      type:String,
      default:'0'
    }
  },
  data() {
    return {}
  },
  methods: {
    resolvePath(routePath,belong) {
      console.log(routePath,belong)
      // todo
    }
  }
}
</script>
