const mockFetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alex Architect", company: { name: "BuildCo" } },
        { id: 2, name: "Jane Developer", company: { name: "CodeStream" } },
        { id: 3, name: "Sam Designer", company: { name: "CreativeStudio" } },
      ]);
    }, 1000);
  });
};

async function processUsers() {
  console.log("Fetching users...");

  const users = await mockFetchUsers();

  const simplifiedUsers = users.map(
    ({ name, company: { name: companyName } }) => {
      return { name, companyName };
    }
  );

  return simplifiedUsers;
}

processUsers().then((result) =>{
    console.log('Processed Users:', result)
})
