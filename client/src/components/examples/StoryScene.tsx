import StoryScene from "../StoryScene";

export default function StorySceneExample() {
  const handleChoice = (choiceId: number) => {
    console.log(`Choice ${choiceId} selected`);
  };

  return (
    <StoryScene
      title="The Crossroads"
      narrative="You stand at the edge of a misty forest path, the air thick with ancient magic. Three paths stretch before you, each shrouded in mystery. A weathered signpost creaks in the wind, its faded letters barely legible. The choice you make now will determine your fate."
      choices={[
        { id: 1, text: "Take the left path, where strange lights dance between the trees" },
        { id: 2, text: "Follow the center path, silent and covered in moss" },
        { id: 3, text: "Brave the right path, where distant howls echo through the mist" },
      ]}
      onChoiceSelect={handleChoice}
    />
  );
}
