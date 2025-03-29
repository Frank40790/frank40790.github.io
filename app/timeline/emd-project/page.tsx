"use client";
import { usePathname } from "next/navigation";
import {
  RightPicLeftText,
  FullTextHeaders,
  Banner,
  IconListStatic,
} from "../../components/blocks/PageBlock";

export default function Event() {
  const icons = [
    { icon: "devicon:matlab", name: "Matlab" },
    { icon: "tabler:file-3d", name: "SolidWorks" },
    { icon: "skill-icons:arduino", name: "Arduino" },
  ];
  const pathname = usePathname();
  return (
    <>
      <title>Autonomous Robot Project</title>
      <Banner textComponent="Enginnering Modelling and Design : Autonomous Robot Project" />
      <FullTextHeaders
        headers="Overview"
        textComponent={
          <>
            <div>
              In this project, we developed an autonomous robot that follows a
              line, collects objects, and returns them to the starting point. It
              uses infrared sensors for navigation, ultrasonic sensors for
              object detection, and a gripper to pick up and carry objects. PID
              control and finite state machine algorithms were applied to manage
              movement and tasks.
            </div>
          </>
        }
      />

      <FullTextHeaders headers="Hardware" textComponent="" />
      <RightPicLeftText
        imageSrc={`${pathname}/robot.png`}
        altText="Arduino Robot"
        textComponent={
          <div>
            In this project, we used shield bot for arduino. Using jumper wire
            and resistor, our group wire up the robot to be able to use
            ultrasonic sensor and infrared sensor. On the output side, there are
            left and right wheel servo motor and a servo motor for gripper
            control. A gripper is added in order to have a better grip on the
            obsticle.
          </div>
        }
      />

      <FullTextHeaders
        headers="Software"
        textComponent={
          <>
            <div>
              Using Simulink and Stateflow in Matlab, the robot is programmed to
              do line following and obsticle handling. First, a finite state
              machine is created to control the input and output of the robot.
              Ultrasonic sensor and Infrared sensor is used as a input, and
              output is controlled by pulse width modulation on a servo motor.
              PID control is added at the end to remove unnecessary movement of
              the robot.
            </div>
          </>
        }
      />

      <FullTextHeaders
        headers="What I've learnt?"
        textComponent={
          <>
            <div>
              This project include lots of engineering methods I have never
              learnt before. It is a valuable experience
            </div>
            <ul className="list-none pl-4">
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                Pulse width modulation
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                PID control
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                Arduino
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                SolidWork CAD Design for gripper
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                Matlab: Simulink and Stateflow
              </li>
            </ul>
          </>
        }
      />
      <FullTextHeaders headers="What is used?" textComponent={<></>} />
      <IconListStatic icons={icons} />
    </>
  );
}
