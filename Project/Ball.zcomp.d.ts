import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Sphere as Sphere_0 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { RigidBody as RigidBody_1 } from "@zcomponent/physics/lib/behaviors/RigidBody";
import { MeshStandardMaterial as MeshStandardMaterial_2 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { SphereTrigger as SphereTrigger_3 } from "@zcomponent/three/lib/components/physics/triggers/SphereTrigger";
import { Collider as Collider_4 } from "@zcomponent/physics/lib/components/Colliders/Collider";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Ball: Sphere_0 & {
			behaviors: {
				0: RigidBody_1,
				RigidBody: RigidBody_1,
			}
		},
		BallMaterial: MeshStandardMaterial_2 & {
			behaviors: {

			}
		},
		BallTrigger: SphereTrigger_3 & {
			behaviors: {

			}
		},
		Collider: Collider_4 & {
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
