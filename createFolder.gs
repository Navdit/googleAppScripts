/* 
Creates the given folder in all the child folders of the given Parent Folder

@param - uniqueFolderId : Folder Id of the parent folder under which the folder has to be created
@param - folderName : Name of the folder which you would like to create
*/

function createFolder() {
  //Enter the unique Id
  var uniqueFolderId = "1RmdSdTzfyHrjg3Z5bD-KwjicnxYioKYx";
  // Enter name of the folder to be created
  var folderName = "Test and Optimize"
  
  var folderId = DriveApp.getFolderById(uniqueFolderId);
  var folders = folderId.getFolders();
  while (folders.hasNext()) {
    var parentFolder = folders.next();
    Logger.log(parentFolder.getName());
    var search = parentFolder.getFoldersByName(folderName);
    // If folder does not exist, create it in the current level
    folder = search.hasNext() ? search.next() : parentFolder.createFolder(folderName);
    Logger.log(folder.getName());
  }
}
