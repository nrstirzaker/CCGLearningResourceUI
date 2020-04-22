
<template>
  <div class="q-pa-md">
    <q-layout view='lHh Lpr lFf'>
      <q-header elevated>
        <div class="row no-wrap">
          <q-toolbar class='col-8'>
            <q-toolbar-title>
              Home Learning Resources by the Parent's &amp; Friend's of Christ's College Guildford
            </q-toolbar-title>
          </q-toolbar>
          <q-toolbar class='col-4'>
            <q-select
              outlined
              v-model='topic'
              :options='options'
              label='Filter by Subject'
              emit-value
              map-options
              :value='topic.value'
              bg-color='white'
              style='min-width: 400px'
              @input='topic => { topicChange(topic) }'
            />
          </q-toolbar>
        </div>
      </q-header>
      <q-page-container>
        <Resources />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>

import Resources from 'components/Resources'
import EventBus from 'components/EventBus.js'
export default {
  name: 'MainLayout',
  components: {
    Resources
  },
  methods: {
    topicChange (newTopic) {
      console.log('MainLayout - Topic changed to: ' + newTopic)
      this.topic = newTopic
      EventBus.$emit('topic-change', newTopic)
    }
  },
  props: {

  },
  data () {
    return {
      topic: '',
      options: [
        { label: 'All', value: 'All' },
        { label: 'General', value: 'General' },
        { label: 'Maths', value: 'Maths' },
        { label: 'Science', value: 'Science' },
        { label: 'Geography', value: 'Geography' },
        { label: 'History', value: 'History' },
        { label: 'Art & Design', value: 'Art%20And%20Design' },
        {
          label: 'IT & Computer Science',
          value: 'IT%20And%20Computer%20Science'
        },
        { label: 'Languages', value: 'Languages' },
        { label: 'PE', value: 'PE' }
      ]
    }
  },
  created () {
    this.topic = this.options[0].label
  }

}
</script>
