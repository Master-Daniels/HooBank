import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} py-5 rounded-xl my-4 mt-20 bg-fadedWhite`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] hover:  `}
                    >
                        <img
                            src={client.logo}
                            alt="client"
                            className="sm:w-[140px] w-[100px] object-contain hover:bg-dimWhite cursor-pointer p-3 rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
