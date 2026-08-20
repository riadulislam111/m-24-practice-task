// Cloud Storage Usage Tracker

// TODO: define types for UploadAction and DeleteAction
 type UploadAction = {
    type: "upload",
    sizeMB: number
 }
 type DeleteAction = {
    type: "delete",
    sizeMB: number

 }
function updateStorageUsage(currentUsageMB: number, action: UploadAction | DeleteAction): number {
     


 if (action.type === "upload") {
    return currentUsageMB + action.sizeMB;
 }

 if(action.type === "delete") {
    let newUsage = currentUsageMB - action.sizeMB;
    if(newUsage < 0) {
        return 0
    }
    return newUsage;
 }
  
 return currentUsageMB;
}
// console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));
// console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }));
// console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));
