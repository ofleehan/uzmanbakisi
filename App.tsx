
import React, { useState, useCallback } from 'react';
import { LayoutMode, VideoItem } from './types';
import { VIDEO_DATA } from './constants';
import Controls from './components/Controls';
import SphereLayout from './components/SphereLayout';
import GridLayout from './components/GridLayout';
import ChannelLogos from './components/ChannelLogos';
import EgopromediaLogos from './components/EgopromediaLogos';

const App: React.FC = () => {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>(LayoutMode.SPHERE);
  const [videos] = useState<VideoItem[]>(VIDEO_DATA);

  const handleLayoutChange = useCallback((mode: LayoutMode) => {
    setLayoutMode(mode);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-black items-center justify-center relative overflow-hidden">
      <EgopromediaLogos layoutMode={layoutMode} /> {/* Pass layoutMode prop */}
      <div className="flex-grow w-full flex items-center justify-center relative perspective-1000px pt-4 pb-24"> {/* Added padding top and bottom to make space for logos/controls */}
        {layoutMode === LayoutMode.SPHERE && <SphereLayout videos={videos} />}
        {layoutMode === LayoutMode.GRID && <GridLayout videos={videos} />}
      </div>
      <ChannelLogos />
      <Controls currentLayout={layoutMode} onLayoutChange={handleLayoutChange} />
    </div>
  );
};

export default App;