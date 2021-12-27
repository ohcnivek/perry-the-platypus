// abstract library
import { DrawingCommon } from './common';
import * as THREE from 'three'
import { Color } from 'three';

// A class for our application state and functionality
class Drawing extends DrawingCommon {

    constructor (canv: HTMLElement) {
        super (canv)
    }

    //cam position: 0,1,-5


    /*
	Set up the scene during class construction
	*/
	initializeScene(){
        const objectRoot = new THREE.Group();

// BODY
        const bodyGroup = new THREE.Group();

        var bodyGeometry = new THREE.BoxGeometry( .8, 2, .75 );
        var bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff, flatShading: true });
        
        var bodyMesh = new THREE.Mesh( bodyGeometry, bodyMaterial );
        
        bodyMesh.position.set(0,0,0);
// BODY
        bodyGroup.add(bodyMesh);


//arm 
//UPPER ARM
        const leftArmGroup = new THREE.Group();
        const rightArmGroup = new THREE.Group();

        var armGeometry = new THREE.BoxGeometry(.55, .25, .25 );
        var armMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff, flatShading: true });

        var rightArmMesh = new THREE.Mesh( armGeometry, armMaterial);
        var leftArmMesh = new THREE.Mesh( armGeometry, armMaterial);

        leftArmMesh.rotation.z  = Math.PI/4
        rightArmMesh.rotation.z = -Math.PI/4

        leftArmMesh.position.set(-.5, 0 , 0)
        rightArmMesh.position.set(.5, 0 , 0)

        leftArmGroup.add(leftArmMesh);
        rightArmGroup.add(rightArmMesh)


        // leftArmGroup.translateY(2)

//UPPER ARM
//LOWER ARM
        var lowerArmGeometry = new THREE.BoxGeometry(.45, .25, .25 );
        var lowerArmMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff, flatShading: true });

        var leftlowerArmMesh = new THREE.Mesh( lowerArmGeometry, lowerArmMaterial);
        leftlowerArmMesh.translateX(-.73)
        leftlowerArmMesh.translateY(-.3)
        leftlowerArmMesh.rotation.z  = Math.PI/2.9

        var rightlowerArmMesh = new THREE.Mesh( lowerArmGeometry, lowerArmMaterial);
        rightlowerArmMesh.translateX(.73)
        rightlowerArmMesh.translateY(-.3)
        rightlowerArmMesh.rotation.z  = -Math.PI/2.9

        leftArmGroup.add(leftlowerArmMesh);
        rightArmGroup.add(rightlowerArmMesh)

        
//LOWER ARM

const leftHandGroup = new THREE.Group();
const rightHandGroup = new THREE.Group();

// hand
var palmGeometry = new THREE.BoxGeometry(.25, .1, .25 );
var palmMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff, flatShading: true });

var leftPalmMesh = new THREE.Mesh(palmGeometry, palmMaterial);
leftPalmMesh.translateX(-.85)
leftPalmMesh.translateY(-.5)
leftPalmMesh.rotateZ(-Math.PI/10)

var rightPalmMesh = new THREE.Mesh(palmGeometry, palmMaterial);
rightPalmMesh.translateX(.85)
rightPalmMesh.translateY(-.5)
rightPalmMesh.rotateZ(Math.PI/10)

leftHandGroup.add(leftPalmMesh)
rightHandGroup.add(rightPalmMesh)



//fingers
    var fingerGeometry = new THREE.BoxGeometry(.25, .1, .25/3 );
    var fingerMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff, flatShading: true });

    var leftThumb = new THREE.Mesh(fingerGeometry, fingerMaterial);
    leftThumb.translateZ(.1)
    leftThumb.translateX(-.75)
    leftThumb.translateY(-.55)
    leftThumb.rotateZ(-Math.PI/2)

    leftHandGroup.add(leftThumb)

    var rightThumb = new THREE.Mesh(fingerGeometry, fingerMaterial);
    rightThumb.translateZ(.1)
    rightThumb.translateX(.75)
    rightThumb.translateY(-.55)
    rightThumb.rotateZ(Math.PI/2)

    leftHandGroup.add(leftThumb)
    rightHandGroup.add(rightThumb)


    var leftIndex = new THREE.Mesh(fingerGeometry, fingerMaterial);
    leftIndex.translateZ(.09)
    leftIndex.translateX(-.95)
    leftIndex.translateY(-.6)
    leftIndex.rotateZ(Math.PI/2.5)

    leftHandGroup.add(leftIndex)

    var rightIndex = new THREE.Mesh(fingerGeometry, fingerMaterial);
    rightIndex.translateZ(.09)
    rightIndex.translateX(.95)
    rightIndex.translateY(-.6)
    rightIndex.rotateZ(-Math.PI/2.5)

    rightHandGroup.add(rightIndex)

    var leftMiddle = new THREE.Mesh(fingerGeometry, fingerMaterial);
    leftMiddle.translateZ(0)
    leftMiddle.translateX(-.91)
    leftMiddle.translateY(-.6)
    leftMiddle.rotateZ(Math.PI/1.99)

    leftHandGroup.add(leftMiddle)

    var rightMiddle = new THREE.Mesh(fingerGeometry, fingerMaterial);
    rightMiddle.translateZ(0)
    rightMiddle.translateX(.91)
    rightMiddle.translateY(-.6)
    rightMiddle.rotateZ(-Math.PI/1.99)

    rightHandGroup.add(rightMiddle)


    var leftLast = new THREE.Mesh(fingerGeometry, fingerMaterial);
    leftLast.translateZ(-.09)
    leftLast.translateX(-.9)
    leftLast.translateY(-.6)
    leftLast.rotateZ(Math.PI/1.7)

    leftHandGroup.add(leftLast)

    var rightLast = new THREE.Mesh(fingerGeometry, fingerMaterial);
    rightLast.translateZ(-.09)
    rightLast.translateX(.9)
    rightLast.translateY(-.6)
    rightLast.rotateZ(-Math.PI/1.7)

    rightHandGroup.add(rightLast)


//hand

    leftArmGroup.add(leftHandGroup)
    rightArmGroup.add(rightHandGroup)

    leftArmGroup.rotateX(-Math.PI/5)
    rightArmGroup.rotateX(Math.PI/5)

// needs to be at the end 
        bodyGroup.add(rightArmGroup);
        bodyGroup.add(leftArmGroup);
        
//arm 



//HAT
        const hatGroup = new THREE.Group();
    // rim of hat
        
        // front w tilt
        var hatrimFrontGeometry = new THREE.CylinderGeometry( .85, .85, .1, 64, 17, false, 0, 3.15);
        var hatMaterial = new THREE.MeshPhongMaterial({ color: 0x8a5433, flatShading: true });
        var hatMesh = new THREE.Mesh( hatrimFrontGeometry, hatMaterial );

        hatMesh.translateY(1.05)
        hatMesh.rotation.z = -Math.PI /20
        hatMesh.rotation.y = Math.PI/2
        hatGroup.add(hatMesh);

        //back w tilt
        var hatrimBackGeometry = new THREE.CylinderGeometry( .85, .85, .1, 64, 17, false, 3.15, 3.15);
        hatMesh = new THREE.Mesh( hatrimBackGeometry, hatMaterial );

        hatMesh.translateY(1.05)
        hatMesh.translateZ(-.05)
        hatMesh.rotation.x = Math.PI / 20
        hatMesh.rotation.y = Math.PI/2
        hatGroup.add(hatMesh);
    // rim of hat

    //top of hat
        var topOfhatGeometry = new THREE.BoxGeometry( .85, .51, .76 )
        var topOfhatMesh = new THREE.Mesh( topOfhatGeometry, hatMaterial );

        topOfhatMesh.translateY(1.25)
        hatGroup.add(topOfhatMesh);
    //top of hat
        
    //bottom black rim of hat
        var bottomRimOfHatGeometry =  new THREE.BoxGeometry( .89, .20, .80 )
        var bottomRimOfHatMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, flatShading: true });
        var bottomRimOfHatMesh = new THREE.Mesh( bottomRimOfHatGeometry, bottomRimOfHatMaterial );

        bottomRimOfHatMesh.translateY(1.12)
        hatGroup.add(bottomRimOfHatMesh)
        hatGroup.scale.set(1.1, 1.1,1);
    //bottom black rim of hat

        bodyGroup.add(hatGroup);
//HAT



//face 
    const faceGroup = new THREE.Group();
    const eyeGroup = new THREE.Group();
    const noseMouthGroup = new THREE.Group();

    //magenta eyebrow part of eye 
    var magentaPartOfEyeGeometry =  new THREE.BoxGeometry( .30, .12, .15)
    var magentaPartOfEyeMaterial = new THREE.MeshPhongMaterial({ color: 0x28c3d4, flatShading: true });

    var magentaPartOfRightEyeMesh = new THREE.Mesh( magentaPartOfEyeGeometry, magentaPartOfEyeMaterial);
    magentaPartOfRightEyeMesh.translateZ(.4)
    magentaPartOfRightEyeMesh.translateX(-.26)
    magentaPartOfRightEyeMesh.translateY(.75)

    eyeGroup.add(magentaPartOfRightEyeMesh)

    var magentaPartOfLeftEyeMesh = new THREE.Mesh( magentaPartOfEyeGeometry, magentaPartOfEyeMaterial);
    magentaPartOfLeftEyeMesh.translateZ(.4)
    magentaPartOfLeftEyeMesh.translateX(.26)
    magentaPartOfLeftEyeMesh.translateY(.75)

    eyeGroup.add(magentaPartOfLeftEyeMesh)

    //white part of eye
    var whitePartOfEyeGeometry =  new THREE.BoxGeometry( .115, .19, .15)
    var whitePartOfEyeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });

    var whitePartOfRightEyeMesh = new THREE.Mesh( whitePartOfEyeGeometry, whitePartOfEyeMaterial);
    whitePartOfRightEyeMesh.translateZ(.35)
    whitePartOfRightEyeMesh.translateX(-.34)
    whitePartOfRightEyeMesh.translateY(.64)

    eyeGroup.add(whitePartOfRightEyeMesh)

    var whitePartOfLeftEyeMesh = new THREE.Mesh( whitePartOfEyeGeometry, whitePartOfEyeMaterial);
    whitePartOfLeftEyeMesh.translateZ(.35)
    whitePartOfLeftEyeMesh.translateX(.34)
    whitePartOfLeftEyeMesh.translateY(.64)

    eyeGroup.add(whitePartOfLeftEyeMesh)

    //black part of eye 
    var blackPartOfEyeGeometry =  new THREE.BoxGeometry( .195, .15, .15)
    var blackPartOfEyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, flatShading: true });

    var blackPartOfLeftEyeMesh = new THREE.Mesh( blackPartOfEyeGeometry, blackPartOfEyeMaterial);
    blackPartOfLeftEyeMesh.translateZ(.37)
    blackPartOfLeftEyeMesh.translateX(-.205)
    blackPartOfLeftEyeMesh.translateY(.62)

    eyeGroup.add(blackPartOfLeftEyeMesh)

    var blackPartOfRightEyeMesh = new THREE.Mesh( blackPartOfEyeGeometry, blackPartOfEyeMaterial);
    blackPartOfRightEyeMesh.translateZ(.37)
    blackPartOfRightEyeMesh.translateX(.205)
    blackPartOfRightEyeMesh.translateY(.62)

    eyeGroup.add(blackPartOfRightEyeMesh)

    faceGroup.add(eyeGroup);


// nose mouth 

    var noseGeometry =  new THREE.BoxGeometry( .35, .25, .35)
    var noseMouthMaterial = new THREE.MeshPhongMaterial({ color: 0xffc038, flatShading: true });

    var noseMesh = new THREE.Mesh( noseGeometry, noseMouthMaterial);
    noseMesh.translateZ(.25)
    noseMesh.translateY(.42)
    noseMesh.rotation.y = Math.PI /4
    
    noseMouthGroup.add(noseMesh)


    var topMouthGeometry =  new THREE.BoxGeometry( .60, .12, .55)
    var bottomMouthGeometry = new THREE.BoxGeometry(.4, .1,.33)
    var mouthMesh = new THREE.Mesh ( topMouthGeometry, noseMouthMaterial)
    mouthMesh.translateZ(.5)
    mouthMesh.translateY(.4)

    noseMouthGroup.add(mouthMesh) // adding upperMouth

    mouthMesh = new THREE.Mesh (bottomMouthGeometry, noseMouthMaterial)
    mouthMesh.translateZ(.5)
    mouthMesh.translateY(.3)

    noseMouthGroup.add(mouthMesh) // adding lower Mouth
    
    faceGroup.add(noseMouthGroup);
    faceGroup.translateY(.2) // moving face group up by .1 to make it resemble perry more 

//nose mouth

    bodyGroup.add(faceGroup)

//face 

//leg 

    //upper leg 
    const legGroup = new THREE.Group();
    
    const leftLegGroup = new THREE.Group();
    const rightLegGroup = new THREE.Group();

    var legGeometry =  new THREE.BoxGeometry( .3, .4, .5)
    var legMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff, flatShading: true });

    var rightLegMesh = new THREE.Mesh( legGeometry, legMaterial);
    rightLegMesh.translateX(.4)
    rightLegMesh.translateY(-.9)
    rightLegMesh.rotation.z = Math.PI / 5


    var leftLegMesh = new THREE.Mesh( legGeometry, legMaterial);
    leftLegMesh.translateX(-.4)
    leftLegMesh.translateY(-.9)
    leftLegMesh.rotation.z = -Math.PI / 5

    leftLegGroup.add(leftLegMesh)
    rightLegGroup.add(rightLegMesh)


    // lower leg 
    var lowerLegGeometry = new THREE.BoxGeometry( .2, .4, .4)

    var rightLowerLegMesh = new THREE.Mesh(lowerLegGeometry,legMaterial )
    rightLowerLegMesh.rotation.z = -Math.PI / 30
    rightLowerLegMesh.translateX(.6)
    rightLowerLegMesh.translateY(-1.15)

    rightLegGroup.add(rightLowerLegMesh)
    

    var leftLowerLegMesh = new THREE.Mesh(lowerLegGeometry,legMaterial )
    leftLowerLegMesh.rotation.z = Math.PI / 30
    leftLowerLegMesh.translateX(-.6)
    leftLowerLegMesh.translateY(-1.15)

    leftLegGroup.add(leftLowerLegMesh)
    

    

    //feet 
    var feetGeometry = new THREE.BoxGeometry(.3, .15, .6)
    var feetMaterial = new THREE.MeshStandardMaterial({ color: 0xffc038, flatShading: true })

    var rightFeetMesh = new THREE.Mesh(feetGeometry, feetMaterial);
    rightFeetMesh.translateX(.5)
    rightFeetMesh.translateY(-1.4)
    rightFeetMesh.translateZ(.1)

    rightLegGroup.add(rightFeetMesh)

    var leftFeetMesh = new THREE.Mesh(feetGeometry, feetMaterial);
    leftFeetMesh.translateX(-.5)
    leftFeetMesh.translateY(-1.4)
    leftFeetMesh.translateZ(.1)

    leftLegGroup.add(leftFeetMesh)


    // needs to come last 
    legGroup.add(leftLegGroup)
    legGroup.add(rightLegGroup)

    rightLegGroup.rotateX(-Math.PI/25)
    leftLegGroup.rotateX(Math.PI/25)

    bodyGroup.add(legGroup)
//leg


//tail 
    const tailGroup = new THREE.Group();

    var tailGeometry = new THREE.BoxGeometry(.55, .15, 1)
    const tailMaterial = new THREE.MeshPhongMaterial({ color: 0xffc038, flatShading: true });

    var tailMesh = new THREE.Mesh( tailGeometry, tailMaterial );
    

    tailGroup.add(tailMesh)
    tailGroup.translateZ(-.75)
    tailGroup.translateY(-.5)
    tailGroup.rotateX(Math.PI / 6)


    bodyGroup.add(tailGroup)


//tail

        const gridHelper = new THREE.GridHelper(200,50)

        const scaleVector = 1.3;
        bodyGroup.scale.set(scaleVector, scaleVector, scaleVector);
        // bodyGroup.rotateY(Math.PI)

        objectRoot.add(bodyGroup);
        this.scene.add( objectRoot );
        // this.scene.add(gridHelper)

    }

	/*
	Update the scene during requestAnimationFrame callback before rendering
	*/
	updateScene(time: DOMHighResTimeStamp){}
}

// a global variable for our state.  We implement the drawing as a class, and 
// will have one instance
var myDrawing: Drawing;

// main function that we call below.
// This is done to keep things together and keep the variables created self contained.
// It is a common pattern on the web, since otherwise the variables below woudl be in 
// the global name space.  Not a huge deal here, of course.

function exec() {
    // find our container
    var div = document.getElementById("drawing");

    if (!div) {
        console.warn("Your HTML page needs a DIV with id='drawing'")
        return;
    }

    // create a Drawing object
    myDrawing = new Drawing(div);
}

exec()