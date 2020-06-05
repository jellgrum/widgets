# Contacts widget
Stores and shows list contacts.
This widget has available fields:
- name
- description
- phone number
- email
- Skype (username)
- Facebook (id)
- Telegram (username)
- website (url)

Now there are in view mode the following features:
- search contacts in list by fields (has setting)
- delete/change contact data
- each field, except for the name and description, is a link that opens in a new tab
- ability to transfer the default contact list

Now there are in settings mode the following features:
- select visible field (name is the required field)
- show/hide search input
- case-sensitive of search input
- select fields that using in search input (name is the required field)

## Example 
### Setting and view component
```js
const [settings, updateSettings] = useState({})

return (
<>
    <EditComponent
        handleChange={updateSettings}
        settings={settings}
    />
    <ViewComponent
        settings={settings}
        extraContacts={[]}
    />
</>
)
```
