import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { fromPairs, map } from 'lodash-es';
import * as extractedTailwindConfigStyle from 'core/styles/core/tailwind-config.scss';

@Injectable()
export class FluytTailwindService
{
    private _tailwindConfig: ReplaySubject<any> = new ReplaySubject<any>(1);

    
    constructor()
    {
        // Prepare the config object
        const config: any = {};

        // Extract the style from the class
        const regexpForClass = /\.fluyt-tailwind-extracted-config\s\{([\s\S]*)\}/g;
        const style = regexpForClass.exec(extractedTailwindConfigStyle.default)[1].trim();

        // Extract the rules
        const regexp = /(--[\s\S]*?):'([\s\S]*?)';/g;
        let rules = regexp.exec(style);

        // Add to the config
        while ( rules !== null )
        {
            const configGroup = /--([\s\S]*?)-/g.exec(rules[1])[1];
            if ( !config[configGroup] )
            {
                config[configGroup] = {};
            }

            config[configGroup][rules[1].replace(/(--[\s\S]*?-)/g, '')] = rules[2];
            rules = regexp.exec(style);
        }

        // Parse the themes objects
        config.themes = fromPairs(map(config.themes, (value, key) => [key, JSON.parse(value)]));

        // Execute the observable with the config
        this._tailwindConfig.next(config);
    }

    
    /**
     * Getter for _tailwindConfig
     */
    get tailwindConfig$(): Observable<any>
    {
        return this._tailwindConfig.asObservable();
    }
}
