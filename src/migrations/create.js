require('dotenv').config()

const {
  newMigration,
  FieldType,
  RelationType,
  Renderer,
} = require('@graphcms/management')

const authToken = process.env.GRAPHCMS_AUTH_TOKEN
const endpoint = process.env.GRAPHCMS_ENDPOINT

const migration = newMigration({ authToken, endpoint })

const creator = migration.createModel({
  apiId: 'Creator',
  apiIdPlural: 'Creators',
  displayName: 'Creator',
})

creator.addSimpleField({
  apiId: 'name',
  displayName: 'Name',
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
})

creator.addSimpleField({
  apiId: 'bio',
  displayName: 'Bio',
  type: FieldType.String,
  isRequired: true,
  formRenderer: Renderer.MultiLine,
})

creator.addRelationalField({
  apiId: 'avatar',
  displayName: 'Avatar',
  model: 'Asset',
})

const link = migration.createModel({
  apiId: 'Link',
  apiIdPlural: 'Links',
  displayName: 'Link',
})

link.addSimpleField({
  apiId: 'text',
  displayName: 'Text',
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
})

link.addSimpleField({
  apiId: 'url',
  displayName: 'URL',
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
  validations: {
    matches: {
      regex:
        '^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$',
    },
  },
})

const video = migration.createModel({
  apiId: 'Video',
  apiIdPlural: 'Videos',
  displayName: 'Video',
})

video.addSimpleField({
  apiId: 'url',
  displayName: 'URL',
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
  validations: {
    matches: {
      regex:
        '^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$',
    },
  },
})

const page = migration.createModel({
  apiId: 'Page',
  apiIdPlural: 'Pages',
  displayName: 'Page',
})

page.addSimpleField({
  apiId: 'slug',
  displayName: 'Slug',
  type: FieldType.String,
  formRenderer: Renderer.Slug,
  isRequired: true,
  isTitle: true,
  isUnique: true,
})

page.addRelationalField({
  apiId: 'creator',
  displayName: 'Creator',
  model: 'Creator',
  relationType: RelationType.OneToOne,
  reverseField: {
    apiId: 'page',
    displayName: 'Page',
    isHidden: true,
  },
})

page.addUnionField({
  apiId: 'blocks',
  displayName: 'Blocks',
  relationType: RelationType.OneToMany,
  models: ['Link', 'Video'],
  reverseField: {
    apiId: 'page',
    displayName: 'Page',
    isHidden: true,
  },
})

const result = migration.run()

console.log(result)
