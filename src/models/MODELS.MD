

**SPACE**
id: number
name: string
state: (active|off|idle)
tags: many to many relation with TAG
appliances: many to many

**APPLIANCE**
id
name
space: foreign key to SPACE

**TAG**
name: string



