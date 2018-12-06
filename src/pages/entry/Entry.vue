<template>
 <div>
  <entry-header></entry-header>
  <entry-menu></entry-menu>
 </div>
</template>
<script>
import EntryHeader from './components/Header'
import EntryMenu from './components/EntryMenu'

export default {
  name: 'Entry',
  components: {
    EntryHeader,
    EntryMenu
  }
}
</script>

<style>

</style>
