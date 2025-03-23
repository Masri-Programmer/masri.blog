The `ResourceForm.vue` component is used as a generic component, that can present the form for the frontend by using data and meta-data from the backend.

Through the ResourceSchemas in the backend, we can define:

- the data that is available for this resource and COULD be presented in the form (resource.data.attributes)
- which of those attributes are ALLOWED to be edited by the user (resource.meta.editable): the meta-data here is a copy of the data used in the backend to authorize/validate the editing in the update action
- attached meta collections (resources.media) (`resources.data.media` is DEPRECATED and MUST NOT be supported in the frontend anymore, as well as any reference on an attribute where we really want to get the media)
- additional data for `belongsTo`-relations (resources.data.relations)
- possibly (could be turned off via ModelConfiguration) additional data for `hasMany` and `belongsToMany`-relations (resources.data.collections)
- how the form is configurated (resource.form) in terms of:
    - sections (resource.form.sections)
    - required fields (resource.form.required)
    - conditional controls/fields and what should be the toggles for them etc. (NYI)


## Dynamic components from multiple sources

The component name received by `FormControl.vue` could come from one of three sources and MUST be selected by the following priority:

- `resources/js/areas/<area>/components/Elements/` (area has to be dynamic and is found on `$page.props.area` currently)
- `resources/js/structures/<structure>/components/Elements/` (structure has to be dynamic and is found on `$page.props.structure` currently)
- `resources/js/structures/<structure_base>/components/Elements/` (structure_base has to be dynamic and is not yet implemented, can be hard coded to "forgeron" instead for now)

If not component could be selected, the value that would have be passed to the form control SHOULD be displayed as text with a developer warning next to it, hinting on the missing components name.

# Footnotes

[^1]: - Saves time by reducing the need for manual UI development
    
- Centralizes control, allowing backend-driven UI updates
    
- Streamlines CRUD operations using Inertia.js