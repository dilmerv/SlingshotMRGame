import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { GLTF as GLTF_0 } from "@zcomponent/three/lib/components/models/GLTF";
import { Group as Group_1 } from "@zcomponent/three/lib/components/Group";
import { AudioManager as AudioManager_2 } from "./Utilities/AudioManager";
import { RigidBody as RigidBody_3 } from "@zcomponent/physics/lib/behaviors/RigidBody";
import { Billboard as Billboard_4 } from "@zcomponent/three/lib/components/transforms/Billboard";
import { Text as Text_5 } from "@zcomponent/three/lib/components/text/Text";
import { BallSpawner as BallSpawner_6 } from "./BallSpawner";
import { Collider as Collider_7 } from "@zcomponent/physics/lib/components/Colliders/Collider";
import { DefaultCookieConsent as DefaultCookieConsent_8 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_9 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_10 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_11 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { XRController as XRController_12 } from "@zcomponent/three-webxr/lib/components/XRController";
import { SetGrabState as SetGrabState_13 } from "@zcomponent/physics/lib/behaviors/SetGrabState";
import { ToggleGrabState as ToggleGrabState_14 } from "@zcomponent/physics/lib/behaviors/ToggleGrabState";
import { Audio as Audio_15 } from "@zcomponent/core/lib/components/Audio";
import { RigidbodyGrabber as RigidbodyGrabber_16 } from "@zcomponent/physics/lib/components/RigidbodyGrabber";
import { ShadowPlane as ShadowPlane_17 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { default as Slingshot_zcomp_18 } from "./Slingshot.zcomp";
import { SlingshotGrabber as SlingshotGrabber_19 } from "./SlingshotGrabber";
import { Line as Line_20 } from "@zcomponent/three/lib/components/lines/Line";
import { default as Target_zcomp_21 } from "./Target.zcomp";
import { SlingshotTarget as SlingshotTarget_22 } from "./SlingshotTarget";
import { default as Table_zcomp_23 } from "./Table.zcomp";
import { TeleportManager as TeleportManager_24 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_25 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { XRRigVR as XRRigVR_26 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { XRCamera as XRCamera_27 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_28 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_29 } from "@zcomponent/three-webxr/lib/components/XRManager";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Arrow: GLTF_0 & {
			behaviors: {

			}
		},
		Audio: Group_1 & {
			behaviors: {
				0: AudioManager_2,
				AudioManager: AudioManager_2,
			}
		},
		BallFactory: Group_1 & {
			behaviors: {

			}
		},
		BallSlide: GLTF_0 & {
			behaviors: {
				0: RigidBody_3,
				RigidBody: RigidBody_3,
			}
		},
		BallSlideBillboard: Billboard_4 & {
			behaviors: {

			}
		},
		BallSlideText: Text_5 & {
			behaviors: {

			}
		},
		BallSpawner: BallSpawner_6 & {
			behaviors: {

			}
		},
		Collider: Collider_7 & {
			behaviors: {

			}
		},
		Collider0: Collider_7 & {
			behaviors: {

			}
		},
		Collider1: Collider_7 & {
			behaviors: {

			}
		},
		Collider2: Collider_7 & {
			behaviors: {

			}
		},
		Collider3: Collider_7 & {
			behaviors: {

			}
		},
		Collider4: Collider_7 & {
			behaviors: {

			}
		},
		Collider5: Collider_7 & {
			behaviors: {

			}
		},
		Cylinder_Black: GLTF_0 & {
			behaviors: {
				0: RigidBody_3,
				RigidBody: RigidBody_3,
			}
		},
		DefaultCookieConsent: DefaultCookieConsent_8 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_9 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_10 & {
			behaviors: {

			}
		},
		Defaults: Group_1 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_11 & {
			behaviors: {

			}
		},
		GroundCollider: Collider_7 & {
			behaviors: {
				0: RigidBody_3,
				RigidBody: RigidBody_3,
			}
		},
		Iconsphere_Yellow: GLTF_0 & {
			behaviors: {
				0: RigidBody_3,
				RigidBody: RigidBody_3,
			}
		},
		Left_Controller: XRController_12 & {
			behaviors: {
				0: SetGrabState_13,
				SetGrabState: SetGrabState_13,
				1: ToggleGrabState_14,
				ToggleGrabState: ToggleGrabState_14,
			}
		},
		MusicBackground: Audio_15 & {
			behaviors: {

			}
		},
		Pyramid_Small_Red: GLTF_0 & {
			behaviors: {
				0: RigidBody_3,
				RigidBody: RigidBody_3,
			}
		},
		Pyramid_Tall_Blue: GLTF_0 & {
			behaviors: {
				0: RigidBody_3,
				RigidBody: RigidBody_3,
			}
		},
		Ramp_Grey: GLTF_0 & {
			behaviors: {
				0: RigidBody_3,
				RigidBody: RigidBody_3,
			}
		},
		RandomObjects: Group_1 & {
			behaviors: {

			}
		},
		RandomObjectsBillboard: Billboard_4 & {
			behaviors: {

			}
		},
		RandomObjectsText: Text_5 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_12 & {
			behaviors: {
				0: SetGrabState_13,
				SetGrabState: SetGrabState_13,
				1: ToggleGrabState_14,
				ToggleGrabState: ToggleGrabState_14,
			}
		},
		RigidbodyGrabber_Left: RigidbodyGrabber_16 & {
			behaviors: {

			}
		},
		RigidbodyGrabber_Right: RigidbodyGrabber_16 & {
			behaviors: {

			}
		},
		SFXLaunchBall: Audio_15 & {
			behaviors: {

			}
		},
		SFXScoreUp: Audio_15 & {
			behaviors: {

			}
		},
		SFXThrowWood: Audio_15 & {
			behaviors: {

			}
		},
		ScoreInfo: Text_5 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_17 & {
			behaviors: {

			}
		},
		Slingshot: Slingshot_zcomp_18 & {
			behaviors: {
				0: SlingshotGrabber_19,
				SlingshotGrabber: SlingshotGrabber_19,
			}
		},
		SlingshotRubberBand: Line_20 & {
			behaviors: {

			}
		},
		SlingshotTarget: Target_zcomp_21 & {
			behaviors: {
				0: SlingshotTarget_22,
				SlingshotTarget: SlingshotTarget_22,
			}
		},
		Table_Main: Table_zcomp_23 & {
			behaviors: {

			}
		},
		Table_Small: Table_zcomp_23 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_24 & {
			behaviors: {

			}
		},
		Torus_Green: GLTF_0 & {
			behaviors: {
				0: RigidBody_3,
				RigidBody: RigidBody_3,
			}
		},
		Turn_Manager: TurnManager_25 & {
			behaviors: {

			}
		},
		UIInfo: Text_5 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_26 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_27 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_28 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_29 & {
			behaviors: {

			}
		},
		SlingshotArrowDirection: Group_1 & {
			behaviors: {

			}
		},
		SlingshotTargetShot: Line_20 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
