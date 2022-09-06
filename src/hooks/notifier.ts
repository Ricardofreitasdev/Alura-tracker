import { TypeMessage } from "@/interfaces/IMessage";
import { NOTIFY } from "@/store/type-mutations";
import { store } from "@/store";

type Notifier = {
  sendMessage: (title: string, description: string, type: TypeMessage) => void;
};

export default (): Notifier => {
  const sendMessage = (
    title: string,
    description: string,
    type: TypeMessage
  ): void => {
    store.commit(NOTIFY, {
      title,
      description,
      type,
    });
  };

  return {
    sendMessage,
  };
};
