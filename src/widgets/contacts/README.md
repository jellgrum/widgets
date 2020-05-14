# Contacts widget
Store and show list contacts. Contact can be deleted or changed.

Now there are the following fields:
- name
- who is (description contact)
- phone number
- email
- Skype (username)
- Facebook (id)
- Telegram (username)
- website (url)

In view mode, each field, except for the name and description, is a link that opens in a new window

## Example 
### Setting and view component
```js
const [contacts, updateContacts] = useState([])

const handleChange = useCallback(updateContacts, [contacts])

return (
    <>
        <EditComponent
            onChange={handleChange}
            initialValues={contacts}
        />
        <ViewComponent contacts={contacts} />
    </>
)
```
