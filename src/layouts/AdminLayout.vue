<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="text-center">
          Dashboard - Dancing Starz Cafe
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="goToUrl('/')">
          <q-item-side icon="photo" />
          <q-item-main label="Website" sublabel="Go to website" />
        </q-item>
        <q-item @click.native="goToUrl('/dashboard')">
          <q-item-side icon="photo" />
          <q-item-main label="Photos" sublabel="Add Photos in photo section" />
        </q-item>
        <q-item @click.native="goToUrl('/dashboard/banners')">
          <q-item-side icon="code" />
          <q-item-main label="Banner" sublabel="Add Banner in Front page" />
        </q-item>
        <!--
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
        -->
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    goToUrl(url) {
      console.log('hello', url)
      this.$router.push({path: url})
    }
  }
}
</script>

<style lang="styl">


</style>
