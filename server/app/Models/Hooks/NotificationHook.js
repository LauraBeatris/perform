const Ws = use('Ws')

const NotificationHook = exports = module.exports = {}

NotificationHook.notify = async (modelInstance) => {
  const topic = await Ws.getChannel('notifications:*').topic(`notifications:${modelInstance.links_to}`)
  /* Verifying if someone is listening to this topic */
  if (topic) {
    topic.broadcast('new', modelInstance)
  }
}
