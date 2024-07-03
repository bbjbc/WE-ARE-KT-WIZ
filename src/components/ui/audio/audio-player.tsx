import React, { useRef, useEffect, useState } from 'react';

import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.esm.js';
import { useAtom } from 'jotai';

import Button from '../button/button';
import { audioAtom } from '../../../utils/atoms';
import { classNames } from '../../../utils/classNames';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const waveformRef = useRef<HTMLDivElement>(null); // Wavesurfer.js에서 오디오 시각화를 렌더링할 HTMLDivElement 요소를 참조
  const wavesurferRef = useRef<WaveSurfer | null>(null); // Wavesurfer.js 인스턴스를 저장할 참조
  const [isPlaying, setIsPlaying] = useState(false); // 현재 오디오가 재생 중인지 나타냄
  const [, setIsReady] = useState(false); // Wavesurfer.js가 오디오를 로드했는지 나타냄
  const [currentAudio, setCurrentAudio] = useAtom(audioAtom);

  // Wavesurfer.js 인스턴스를 생성하고 오디오를 로드하는 함수
  const createWaveSurfer = () => {
    if (waveformRef.current && !wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#ff4e00',
        progressColor: '#dd5e98',
        cursorColor: '#ddd5e9',
        barWidth: 0,
        barRadius: 2,
        cursorWidth: 2,
        minPxPerSec: 50,
        height: 30,
        barGap: 1,
        dragToSeek: true,
        plugins: [TimelinePlugin.create()],
      });

      wavesurferRef.current.load(src); // Wavesurfer.js에 오디오를 로드

      wavesurferRef.current.on('ready', () => setIsReady(true)); // Wavesurfer.js가 오디오를 로드했을 때
      wavesurferRef.current.on('play', () => setIsPlaying(true)); // Wavesurfer.js가 오디오를 재생했을 때
      wavesurferRef.current.on('pause', () => setIsPlaying(false)); // Wavesurfer.js가 오디오를 일시 정지했을 때
    }
  };

  // 컴포넌트가 언마운트될 때 Wavesurfer.js 인스턴스를 파괴 → 메모리 누수 방지
  useEffect(() => {
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, []);

  // 현재 오디오가 변경될 때 Wavesurfer.js 인스턴스를 초기화
  useEffect(() => {
    if (currentAudio && currentAudio !== wavesurferRef.current) {
      wavesurferRef.current?.pause();
      wavesurferRef.current?.seekTo(0); // Wavesurfer.js의 재생 위치를 0초로 설정
    }
  }, [currentAudio]);

  const handlePlayPause = () => {
    if (!wavesurferRef.current) {
      createWaveSurfer();
    } else {
      if (currentAudio && currentAudio !== wavesurferRef.current) {
        currentAudio.pause();
      }
      wavesurferRef.current.playPause(); // 재생/일시 정지 토글
      setCurrentAudio(wavesurferRef.current);
    }
  };

  return (
    <div className="mx-auto mb-4 w-full" onClick={(e) => e.stopPropagation()}>
      <div ref={waveformRef} className="mb-4" />
      <Button
        onClick={handlePlayPause}
        className={classNames(
          'w-full rounded-full text-xs text-white transition-colors',
          isPlaying
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-500 hover:bg-blue-600',
        )}
      >
        {!wavesurferRef.current
          ? '음원 가져오기'
          : isPlaying
            ? '일시 정지'
            : '재생'}
      </Button>
    </div>
  );
};

export default AudioPlayer;
