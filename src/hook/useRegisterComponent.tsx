import { componentRefState } from '@/recoil/componentRefSate';
import { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';

function useRegisterComponentRef(key: string) {
  const ref = useRef<HTMLElement>(null);
  const [refs, setRefs] = useRecoilState(componentRefState);
  
  useEffect(() => {
    if (ref.current) {
      setRefs((oldRefs) => ({
        ...oldRefs,
        [key]: ref.current,
      }));
    }

    return () => {
      setRefs((oldRefs) => {
        const newRefs = { ...oldRefs };
        delete newRefs[key];
        return newRefs;
      });
    };
  }, [key, setRefs]);

  return ref;
}

export default useRegisterComponentRef;