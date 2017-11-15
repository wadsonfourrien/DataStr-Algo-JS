/* ==============================================
        Javascript set data structure
   ============================================== */

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    //this.difference = difference;
    this.show = show;
    this.contains = contains;
    
}


// add element to the set
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}


// remove element from the set
function remove(data) {
    let pos = this.dataStore.indexOf(data);
    if(pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    else {
        return false;
    }
    
}


// show members of set 
function show() {
    return this.dataStore;
}

// check whether a member is part of a set
function contains(data) {
    if(this.dataStore.indexOf(data) > -1) {
        return true;
    }
    else {
        return false;
    }
}



function union(set) {
    let tempSet = new Set();
    
    for(let i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    
    for(let i = 0; i < set.dataStore.length; i++) {
        if(!tempSet.contains(set.dataStore[i])) {
            this.dataStore.push(set.dataStore[i])
        }
    }
    return tempSet;
}



function intersect(set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}



function subset(set) {
    if (this.size() > set.size()) {
        return false;
    }
    else {
        
        for(member in this.dataStore) {
            if(!set.contains(this.dataStore[member])) {
                
                return false;
            }
        }
    }
    return true;
}



function size() {
    return this.dataStore.length;
}

