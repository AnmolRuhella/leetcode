//leet code question no -101 


var symmetry = function(root){

    function isMirror(left, right ){
        if(!left && !right ) return true 
        if(!left || !right) return false 

        return (
            left.value == right.value && 
            isMirror(left.left,right.right) && 
            isMirror(left.right, right.left)
        )

    }
    return isMirror(root.left , root.right)
}

// yha pr hum ky krre ha ek recursive approach lgaa rahe jiske ander mei ky krte ha inner node check krte ha or then outer node check krte ha bsss 
// outer node k liye  isMirror(left.left,right.right) && 
// inner node k liye isMirror(left.right, right.left)
//using DFS here basically left subtree ko puraa check krta ha fir right mei jaata ha 
//BFS same level se chlta ha thik ha 