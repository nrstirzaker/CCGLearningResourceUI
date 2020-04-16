<template>
  <ul id="resource">
    <div
      v-for="resource in resources"
      :key="resource.RowId"
    >
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          class="my-card"
          flat
          bordered
        >
          <q-card-section class="q-pt-xs">
            <q-card-section vertical>
              <div class="text-overline">Topic: {{resource.Topic}}</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Name: {{ resource.Name }}</div>
              <div class="text-h6 q-mt-sm q-mb-xs">Address: <a :href='resource.Address'>{{ resource.Address }}</a></div>
              <div class="text-caption text-grey">
                {{resource.Notes}}
              </div>
            </q-card-section>
            <q-card-actions
              horizontal
              class="justify-around"
            >
              <q-btn
                flat
                round
                color="red"
                icon="favorite"
              />
              <q-btn
                flat
                round
                color="primary"
                icon="share"
              />
            </q-card-actions>
          </q-card-section>
        </q-card>
      </div>

    </div>
  </ul>
</template>

<script>
import axios from 'axios'
import EventBus from 'components/EventBus.js'
export default {
  name: 'Resources',
  data () {
    return {
      resources: null
    }
  },
  methods: {
    topicChange (newTopic) {
      this.getTopicFromServer(newTopic)
    },
    getTopicFromServer (newTopic) {
      const updatedTopic = newTopic || 'all'
      const restURL = 'https://learning-resources-api.herokuapp.com/?topic=' + updatedTopic
      console.log(restURL)
      axios
        .get(restURL)
        .then(response => {
          console.log(JSON.stringify(response.data.rows))
          this.resources = response.data.rows
        })
    }
  },
  created () {
    EventBus.$on('topic-change', (newTopic) => this.topicChange(newTopic))
  },
  mounted () {
    this.getTopicFromServer('all')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
