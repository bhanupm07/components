import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a
        massa eget pretium. Vestibulum hendrerit ornare mauris a consequat. Duis
        sed porttitor diam. Aenean volutpat elit eget tristique egestas.
        Maecenas non enim consequat, porttitor justo ac, porta justo. Phasellus
        eget erat elit. Quisque pharetra quis odio in pharetra. Nunc interdum
        libero in felis mattis dictum.
      </p>
    </div>
  );
}
