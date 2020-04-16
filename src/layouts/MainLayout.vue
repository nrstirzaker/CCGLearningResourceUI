<template>
  <div class="q-pa-md">
    <q-layout view='lHh Lpr lFf'>
      <q-header elevated>
        <div class="row no-wrap">
          <q-toolbar>
            <q-toolbar-title class='col-md-8'>
              Home Learning Resources by the Parent's &amp; Friend's of Christ's College Guildford
            </q-toolbar-title>
            <q-select
              class='col-md-4'
              outlined
              v-model='topic'
              :value='options.All'
              :options='options'
              label='Filter by Subject'
              emit-value
              map-options
              color='black'
              bg-color="white"
              style='max-width: 900px'
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
      EventBus.$emit('topic-change', newTopic)
    }
  },
  data () {
    return {
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
  }
}
</script>
