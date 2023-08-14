import {openDB} from "idb";

// Function to initialize the IndexedDB database
const initializeDB = async (storeName) => {
  const db = await openDB("ai_startup_generator", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, {keyPath: "id", autoIncrement: true});
      }
    },
  });
  return db;
};

// Function to add data to the database
const addData = async (storeName, item) => {
  const db = await initializeDB(storeName);
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  await store.add(item);
  await tx.done;
};

// Function to get all data from the database
const getAllData = async (storeName) => {
  const db = await initializeDB(storeName);
  const tx = db.transaction(storeName, "readonly");
  const store = tx.objectStore(storeName);
  const items = await store.getAll();
  await tx.done;
  return items;
};

// Function to get a specific item by ID
const getItemById = async (storeName, id) => {
  const db = await initializeDB(storeName);
  const tx = db.transaction(storeName, "readonly");
  const store = tx.objectStore(storeName);
  const item = await store.get(id);
  await tx.done;
  return item;
};

// Function to update an item by ID
const updateItemById = async (storeName, id, updatedData) => {
  const db = await initializeDB(storeName);
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  await store.put({...updatedData, id});
  await tx.done;
};

// Function to delete an item by ID
const deleteItemById = async (storeName, id) => {
  const db = await initializeDB(storeName);
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  await store.delete(id);
  await tx.done;
};

// Export the functions
export {
  addData,
  getAllData,
  getItemById,
  updateItemById,
  deleteItemById,
};
