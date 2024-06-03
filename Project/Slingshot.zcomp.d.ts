import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Collider as Collider_0 } from "@zcomponent/physics/lib/components/Colliders/Collider";
import { Box as Box_1 } from "@zcomponent/three/lib/components/meshes/Box";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";
import { SphereTrigger as SphereTrigger_3 } from "@zcomponent/three/lib/components/physics/triggers/SphereTrigger";
import { Sphere as Sphere_4 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { RigidBody as RigidBody_5 } from "@zcomponent/physics/lib/behaviors/RigidBody";
import { MeshStandardMaterial as MeshStandardMaterial_6 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Collider: Collider_0 & {
			behaviors: {

			}
		},
		Handle: Box_1 & {
			behaviors: {

			}
		},
		InitialPullLocation: Group_2 & {
			behaviors: {

			}
		},
		LeftTape: Box_1 & {
			behaviors: {

			}
		},
		LeftTrunk: Box_1 & {
			behaviors: {

			}
		},
		MainTrunk: Box_1 & {
			behaviors: {

			}
		},
		PullTriggerActivator: SphereTrigger_3 & {
			behaviors: {

			}
		},
		RightTape: Box_1 & {
			behaviors: {

			}
		},
		RightTrunk: Box_1 & {
			behaviors: {

			}
		},
		Root: Sphere_4 & {
			behaviors: {

			}
		},
		RubberBandCenter: Box_1 & {
			behaviors: {

			}
		},
		RubberBandLeft: Box_1 & {
			behaviors: {

			}
		},
		RubberBandRight: Box_1 & {
			behaviors: {

			}
		},
		Slingshot: Group_2 & {
			behaviors: {
				0: RigidBody_5,
				RigidBody: RigidBody_5,
			}
		},
		ToolTape: MeshStandardMaterial_6 & {
			behaviors: {

			}
		},
		ToolVisualizer: MeshStandardMaterial_6 & {
			behaviors: {

			}
		},
		ToolWood: MeshStandardMaterial_6 & {
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
