import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Collider as Collider_0 } from "@zcomponent/physics/lib/components/Colliders/Collider";
import { Box as Box_1 } from "@zcomponent/three/lib/components/meshes/Box";
import { RigidBody as RigidBody_2 } from "@zcomponent/physics/lib/behaviors/RigidBody";
import { MeshStandardMaterial as MeshStandardMaterial_3 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";

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
		Collider1: Collider_0 & {
			behaviors: {

			}
		},
		Collider2: Collider_0 & {
			behaviors: {

			}
		},
		Collider3: Collider_0 & {
			behaviors: {

			}
		},
		Collider4: Collider_0 & {
			behaviors: {

			}
		},
		Edge: Box_1 & {
			behaviors: {
				0: RigidBody_2,
				RigidBody: RigidBody_2,
			}
		},
		Edge1: Box_1 & {
			behaviors: {
				0: RigidBody_2,
				RigidBody: RigidBody_2,
			}
		},
		Edge2: Box_1 & {
			behaviors: {
				0: RigidBody_2,
				RigidBody: RigidBody_2,
			}
		},
		Edge3: Box_1 & {
			behaviors: {
				0: RigidBody_2,
				RigidBody: RigidBody_2,
			}
		},
		Table: Box_1 & {
			behaviors: {
				0: RigidBody_2,
				RigidBody: RigidBody_2,
			}
		},
		TableMaterial: MeshStandardMaterial_3 & {
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
