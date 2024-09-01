import { RootState } from "../../redux/Cart/store";
import { useSelector } from "react-redux";

export const CheckoutButton: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const handleOrder = () => {
    const haveItem = items.some((item) => item.quantity > 0);

    if (haveItem) {
      let mensagem = "Olá, gostaria de fazer o seguinte pedido:\n\n";
      let total = 0;

      items.forEach((item) => {
        if (item.quantity > 0) {
          total += item.quantity * item.price;
          mensagem += `|${item.name}, Quantidade: ${item.quantity}| \n`;
        }
      });

      mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
      enviarWhatsApp(mensagem);
    } else {
      alert("Por favor, faça seu pedido antes de encaminhar! \u{1F921}");
    }
  };

  const enviarWhatsApp = (mensagem: string) => {
    const encodedMessage = encodeURIComponent(mensagem);
    const whatsappUrl = `https://wa.me/5599988105045?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <button onClick={handleOrder}>Encaminhar Pedido</button>{" "}
    </>
  );
};
