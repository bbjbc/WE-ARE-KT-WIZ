import { useEffect, useState } from 'react';

interface TextTypeProps {
  textArr: string[];
}

const TextType: React.FC<TextTypeProps> = ({ textArr }) => {
  const [sequence, setSequence] = useState<string>(''); // 현재까지 타이핑한 문자열을 저장
  const [textIndex, setTextIndex] = useState<number>(0); // textArr의 index를 저장
  const [textCount, setTextCount] = useState<number>(0); // 현재까지 타이핑한 문자의 개수를 저장
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // 글자가 지워지는 중인지 나타냄
  const [isTypePaused, setIsTypePaused] = useState<boolean>(false); // 타이핑 중인 문자열을 일시 정지할지 나타냄

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTypePaused) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsTypePaused(false);
          setIsDeleting(true);
        }, 3000);
        return;
      }

      const text = textArr[textIndex];

      // text 지우는 과정
      if (isDeleting) {
        if (textCount <= 0) {
          setIsDeleting(false);
          setSequence('');
          setTextIndex((prev) => (prev + 1) % textArr.length);
          return;
        }

        setSequence((prev) => prev.slice(0, -1));
        setTextCount((prev) => prev - 1);
        return;
      }

      // text가 모두 타이핑되었을 때
      if (textCount >= text.length) {
        setIsTypePaused(true);
        setIsDeleting(true);
        return;
      }

      const nextChar = text[textCount];
      setSequence((prev) => prev + nextChar);

      if (nextChar === '\n') {
        setTextCount((prev) => prev + 2);
      } else {
        setTextCount((prev) => prev + 1);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [textCount, isDeleting, isTypePaused, textArr, textIndex]);

  return (
    <div className="flex items-center justify-center">
      <p className="h-24 whitespace-pre-line p-2 text-center font-gonggothic text-3xl text-white">
        {sequence}
        <span className="ml-1 inline-block h-8 w-0.5 animate-blink bg-white align-top"></span>
      </p>
    </div>
  );
};

export default TextType;
