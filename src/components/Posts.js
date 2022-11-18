import { useState } from "react";

function Post(props) {
  const [foiSalvo, setFoiSalvo] = useState(props.foiSalvo);
  const [foiCurtido, setFoiCurtido] = useState(props.foiCurtido);
  const [contador, setContador] = useState(props.curtidasNumero);

  function mudaSalvo() {
    setFoiSalvo(!foiSalvo);
  }

  function mudaCurtido() {
    if (!foiCurtido) {
      setContador(contador + 1);
      setFoiCurtido(!foiCurtido);
    } else {
      setContador(contador - 1);
      setFoiCurtido(!foiCurtido);
    }
  }

  function mudaLikeImagem() {
    if (!foiCurtido) {
      setFoiCurtido(true);
      setContador(contador + 1);
    }
  }

  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagem} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          src={props.imagemPost}
          onDoubleClick={mudaLikeImagem}
          data-test="post-image"
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {foiCurtido ? (
              <ion-icon
                class="liked"
                onClick={mudaCurtido}
                name="heart"
                data-test="like-post"
              ></ion-icon>
            ) : (
              <ion-icon
                onClick={mudaCurtido}
                name="heart-outline"
                data-test="like-post"
              ></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div onClick={mudaSalvo} data-test="save-post">
            {foiSalvo ? (
              <ion-icon name="bookmark"></ion-icon>
            ) : (
              <ion-icon name="bookmark-outline"></ion-icon>
            )}
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" />
          <div class="texto">
            Curtido por <strong>{props.curtidasNome}</strong> e{" "}
            <strong data-test="likes-number">
              e outras {contador} pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    {
      nome: "meowed",
      imagem: "assets/img/meowed.svg",
      imagemPost: "assets/img/gato-telefone.svg",
      curtidasNome: "respondeai",
      curtidasNumero: 101523,
      foiSalvo: false,
      foiCurtido: false,
    },
    {
      nome: "barked",
      imagem: "assets/img/barked.svg",
      imagemPost: "assets/img/dog.svg",
      curtidasNome: "adorable_animals",
      curtidasNumero: 99159,
      foiSalvo: false,
      foiCurtido: false,
    },
  ];
  return (
    <div class="posts">
      {posts.map((post) => (
        <Post
          nome={post.nome}
          imagem={post.imagem}
          imagemPost={post.imagemPost}
          curtidasNome={post.curtidasNome}
          curtidasNumero={post.curtidasNumero}
          foiSalvo={post.foiSalvo}
          foiCurtido={post.foiCurtido}
        />
      ))}
    </div>
  );
}
