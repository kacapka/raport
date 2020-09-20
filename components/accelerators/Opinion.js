import { useState } from 'react';
import { Collapse } from 'react-collapse';
import Button from "../shared/Button";

const Opinion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClick = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <section className="opinion">
            <div className="container opinion-container">
                <h2>Expert opinion</h2>
                <p>
                    For the last few years, we’ve seen rising potential in the local fintech ecosystem, both in Poland and in
                    the entire CEE region. Most teams we encounter are strongly motivated and many of them are ready to scale up their projects on different markets, not only Europe.
                </p>
                <p className="opinion-author">
                    Author: Hubert Anyzewski, <br />
                    Managing Partner & Cofounder of Accelpoint Accelerator
                </p>
                <Button
                    className="opinion-button"
                    onClick={handleOnClick}
                />
                <Collapse isOpened={isOpen}>
                    <div className="opinion-content">
                        <p className="with-margin">
                            Connecting corporations and startups, we see these are mainly startups that build relationships with traditional banks by providing POCs to reach commercial agreements. It truly helps these projects to develop business in other countries. Banks are looking for business-oriented innovation and KPIs but also become increasingly open and motivated to implement solutions and grow within corporate groups.
                        </p>
                        <p className="with-margin">
                            Our cooperation with Santander Bank or Axa Insurance is an excellent example of such a partnership that carries a meaningful impact for the region.
                        </p>
                        <p className="with-margin">
                            Accelpoint’s main focus for the last 2 years has also been building cooperation with fintech hubs such as Great Britain and Singapore. Thanks to our partnerships, we help projects scale up in these jurisdictions and we support them by organizing special programs and building relations with investors, corporate partners, and future clients.
                        </p>
                        <p className="with-margin">
                            We see the potential for startups entering these markets and we are pleased to be a part of their journey. We hope to see more projects from Poland and CEE scaling up their businesses in Asia and Great Britain in the near future.
                        </p>
                    </div>
                </Collapse>
            </div>
        </section>
    );
};

export default Opinion;