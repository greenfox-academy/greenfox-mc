import { expect } from 'chai';

module.exports = function () {
    this.Given('I have a registered schema "$schema"', function (schema) {
        const Test = this.container.get(schema);
        expect(Test).to.not.be.undefined;
    });

    this.When('I get "$key" key from the "$schema" schema from the store', async function (key, schema) {
        const store = this.container.get('store');
        this.context.schema = store.getSchema(schema);
        this.context.storeValue = await this.context.schema.query(`{${key}}`);
    });

    this.Then('I get "$value" from the store', async function (value) {
        expect(this.context.storeValue.data.test).to.eql(value);
    });


    this.When('I save "$url" and "$body" to the "$schema" schema', async function (url, body, schema) {
        const store = this.container.get('store');
        let requestSchema = store.getSchema(schema);
        this.context.mutateResult = await requestSchema.save(url, body);
    });

    this.Then('I get a result with "$url" and "$body" from the schema', function (url, body) {
        expect(this.context.mutateResult.data.request.url).to.eql('${url}')
        expect(this.context.mutateResult.data.request.body).to.eql('${body}')
    })
}


