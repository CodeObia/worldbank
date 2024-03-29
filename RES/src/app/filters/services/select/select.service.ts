import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  ElasticsearchQuery,
  ElasticsearchResponse,
  QueryFilterAttribute,
  Bucket,
  BuildQueryObj,
  ResetOptions,
} from '../interfaces';
import { BodyBuilderService } from '../bodyBuilder/body-builder.service';

@Injectable()
export class SelectService {
  private source: string;
  private readonly api_end_point: string = environment.endPoint;
  total: number;
  subjetData: Subject<Bucket[]>;
  constructor(
    private readonly http: HttpClient,
    private readonly bodyBuilderService: BodyBuilderService
  ) {
    this.subjetData = new Subject();
  }

  set sourceVal(s: string) {
    this.source = s;
  }

  get shouldReset(): Subject<ResetOptions> {
    return this.bodyBuilderService.shouldReset;
  }

  get orOperator(): Subject<boolean> {
    return this.bodyBuilderService.orOperator;
  }

  resetNotification(): void {
    this.bodyBuilderService.resetOtherComponent({ caller: 'select' });
  }

  paginateData(
    query: ElasticsearchQuery | Partial<ElasticsearchQuery>
  ): Subscription {
    return this.http
      .post(this.api_end_point, query)
      .subscribe((d: ElasticsearchResponse) => {
        this.subjetData.next(d.aggregations[this.source].buckets);
      });
  }

  buildquery(bqa: BuildQueryObj): bodybuilder.Bodybuilder {
    const bq: BuildQueryObj = {
      size: bqa.size ? bqa.size : 10,
      source: this.source,
      term: bqa.term,
    };
    return this.bodyBuilderService.buildquery(bq);
  }

  addAttributeToMainQuery(
    keyVal: QueryFilterAttribute
  ): bodybuilder.Bodybuilder {
    this.bodyBuilderService.setAggAttributes = keyVal;
    return this.bodyBuilderService.buildMainQuery();
  }
}
