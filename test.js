class PenguinBlocks {
    constructor(runtime) {
        this.runtime = runtime
        this.currentMSecs = -1
        this.previousButtons = []
        this.currentButtons = []
    }
    
    getInfo() {
        return {
            "id": "PenguinBlocks",
            "name": "PenguinBlocks",
            "blocks": [{
                        "opcode": "changecostume",
                        "blockType": "stack",
                        "text": "change costume [x] [y]",
                        "arguments": {
                            "x": {
                                "type": "string",
                                "defaultValue": "https://www.example.com"
                            },
                            "y": {
                                "type": "number",
                                "defaultValue": "1"
                        },
                    },
            ]
            }            
        };
    }
    
    update() {
        if opcode === "changecostume" {
        addCostumeAt(fetch(x), y)
        }
    }
                }
             }
        }
        return false
    }
}

(function() {
    var extensionInstance = new ScratchSimpleGamepad(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
