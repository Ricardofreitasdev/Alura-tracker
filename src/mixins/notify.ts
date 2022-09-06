import { TypeMessage } from "@/interfaces/IMessage";
import { NOTIFY } from "@/store/type-mutations";
import { store } from "@/store";

export const notifyMixin = {
  methods: {
    notify(
      title: string,
      description: string,
      type: TypeMessage.SUCCESS
    ): void {
      store.commit(NOTIFY, {
        title,
        description,
        type,
      });
    },
  },
};
