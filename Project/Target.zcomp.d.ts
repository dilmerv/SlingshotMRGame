import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { MeshStandardMaterial as MeshStandardMaterial_0 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Group as Group_1 } from "@zcomponent/three/lib/components/Group";
import { Text as Text_2 } from "@zcomponent/three/lib/components/text/Text";
import { Sphere as Sphere_3 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { RigidBody as RigidBody_4 } from "@zcomponent/physics/lib/behaviors/RigidBody";
import { RigidbodyEventEmitter as RigidbodyEventEmitter_5 } from "@zcomponent/physics/lib/components/BodyEventEmitter";
import { Collider as Collider_6 } from "@zcomponent/physics/lib/components/Colliders/Collider";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		White: MeshStandardMaterial_0 & {
			behaviors: {

			}
		},
		Black: MeshStandardMaterial_0 & {
			behaviors: {

			}
		},
		Blue: MeshStandardMaterial_0 & {
			behaviors: {

			}
		},
		Red: MeshStandardMaterial_0 & {
			behaviors: {

			}
		},
		Yellow: MeshStandardMaterial_0 & {
			behaviors: {

			}
		},
		WhiteZone: Group_1 & {
			behaviors: {

			}
		},
		WhiteText: Text_2 & {
			behaviors: {

			}
		},
		WhiteZone0: Sphere_3 & {
			behaviors: {
				0: RigidBody_4,
				RigidBody: RigidBody_4,
			}
		},
		WhiteEmitter: RigidbodyEventEmitter_5 & {
			behaviors: {

			}
		},
		Collider_5: Collider_6 & {
			behaviors: {

			}
		},
		BlackZone: Group_1 & {
			behaviors: {

			}
		},
		BlackText: Text_2 & {
			behaviors: {

			}
		},
		BlackZone0: Sphere_3 & {
			behaviors: {
				0: RigidBody_4,
				RigidBody: RigidBody_4,
			}
		},
		BlackEmitter: RigidbodyEventEmitter_5 & {
			behaviors: {

			}
		},
		Collider_4: Collider_6 & {
			behaviors: {

			}
		},
		BlueZone: Group_1 & {
			behaviors: {

			}
		},
		BlueText: Text_2 & {
			behaviors: {

			}
		},
		BlueZone0: Sphere_3 & {
			behaviors: {
				0: RigidBody_4,
				RigidBody: RigidBody_4,
			}
		},
		BlueEmitter: RigidbodyEventEmitter_5 & {
			behaviors: {

			}
		},
		Collider_3: Collider_6 & {
			behaviors: {

			}
		},
		RedZone: Group_1 & {
			behaviors: {

			}
		},
		RedText: Text_2 & {
			behaviors: {

			}
		},
		RedZone0: Sphere_3 & {
			behaviors: {
				0: RigidBody_4,
				RigidBody: RigidBody_4,
			}
		},
		RedEmitter: RigidbodyEventEmitter_5 & {
			behaviors: {

			}
		},
		Collider_2: Collider_6 & {
			behaviors: {

			}
		},
		YellowZone: Group_1 & {
			behaviors: {

			}
		},
		YellowText: Text_2 & {
			behaviors: {

			}
		},
		YellowZone0: Sphere_3 & {
			behaviors: {
				0: RigidBody_4,
				RigidBody: RigidBody_4,
			}
		},
		YellowEmitter: RigidbodyEventEmitter_5 & {
			behaviors: {

			}
		},
		Collider: Collider_6 & {
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
