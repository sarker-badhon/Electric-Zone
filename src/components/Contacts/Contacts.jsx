// import React from 'react';

// const Contacts = () => {
//     return (
//         <div>
//             <h1>This is Contacts page</h1>
//         </div>
//     );
// };

// export default Contacts;
import React from 'react';

const Contacts = () => {
  const contacts = [
    { id: 1, name: 'Badhon', email: 'sarkerbadhon01@gamil.com' },
    { id: 2, name: 'Shuvo', email: 'shuvo@example.com' },
    { id: 3, name: 'Ashik', email: 'ashik@example.com' },
  ];

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Contacts</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {contacts.map((contact) => (
              <li key={contact.id}>
                <a href="#" className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">{contact.name}</p>
                      <p className="ml-2 flex-shrink-0 flex items-center text-sm text-gray-500">
                        {contact.email}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;