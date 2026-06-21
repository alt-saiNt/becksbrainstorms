// Note: place the attached background image next to this file and name it "background.png"
// or update the URL in the CSS file to match the actual filename/location.
export default function StoryTime() {
  return (
    <div className="story-wrap">
      <div className="story-content">
        <h1 className="title">The Overture</h1>
        <h2 className="byline">a story by b</h2>

        <div style={{height: '18px'}} />

        <h3 className="chapter">Chapter 1: The End</h3>

        <div style={{height: '18px'}} />

        <p className="body-text">
          The world hadn't always been like this. Bleak. Desolate. The guidance
          system that Apis navigated the wasteland with had images that were,
          in the programs original iteration, were meant to be reference
          images for verifying landmarks along a route. Those landmarks that
          Apis could see as an overlay against the usual visual input being
          processed by its forward sensors............
        </p>
      </div>
    </div>
  );
}
